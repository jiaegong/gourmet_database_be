const express = require('express');
const app = express();
const port = 5000;
require('dotenv').config();

// DB
const mongoose = require('mongoose');
mongoose
  .connect(process.env.MONGO_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => console.log('MongoDB Connected...🚀'))
  .catch((err) => console.log(err));

// body-parser
app.use(express.urlencoded({ extended: false }));
app.use(express.json());

// Router
const gourmetRouter = require('./routes/Gourmet');
app.use('/api', gourmetRouter);

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});

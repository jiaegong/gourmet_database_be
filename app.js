const express = require('express');
const app = express();
const port = 5000;

require('dotenv').config();

const cors = require('cors');
const allowedOrigins = ['http://localhost:3000'];

// CORS
app.use(
  cors({
    origin: (origin, callback) => {
      if (allowedOrigins.includes(origin) || !origin) {
        callback(null, true);
      } else {
        callback(new Error('Not allowed by CORS'));
      }
    },
  })
);

// DB
const mongoose = require('mongoose');
mongoose
  .connect(process.env.MONGO_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => console.log('MongoDB Connected...🚀'))
  .catch(err => console.log(err));

// body-parser
app.use(express.urlencoded({ extended: false }));
app.use(express.json());

// Router
const gourmetRouter = require('./routes/gourmet');
app.use('/api', gourmetRouter);

app.listen(port, () => {
  console.log(`Server is listening on port ${port}`);
});

const mongoose = require('mongoose');

const gourmetSchema = mongoose.Schema({
  name: {
    type: String,
    maxlength: 50,
  },
  rating: Number,
  desc: {
    type: String,
    minlength: 5,
  },
  type: String,
  location: {
    type: {
      x: Number,
      y: Number,
    },
  },
  createdDate: Date,
});

const Gourmet = mongoose.model('Gourmet', gourmetSchema);

module.exports = { Gourmet };

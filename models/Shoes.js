const mongoose = require('mongoose');

// @Todo:
// 1. make sure to add "name" or something to "images" this is to make sure that we keep track of the poster image, and the angles of the images,
// 2. figure out how to make the object inside an array "required: true"
const ShoesSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true
  },
  brand: {
    type: String,
    required: true
  },
  colorway: {
    type: String
  },
  colors: {
    type: [String]
  },
  retail_price: {
    type: Number,
    required: true
  },
  release_date: {
    type: Date,
    required: true
  },
  date_added: {
    type: Date,
    default: Date.now()
  },
  model: {
    type: String,
    required: true
  },
  images: {
    type: [String]
  },
  total_quantity: {
    type: Number,
    default: 0
  },
  lowest_price: {
    type: Number,
    default: 0
  }
});

module.exports = Shoes = mongoose.model('shoes', ShoesSchema);

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
  product_id: {
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
    type: Number
  },
  release_date: {
    type: Date,
    required: true
  },
  date_added: {
    type: Date,
    default: Date.now()
  },
  attributes: [
    {
      size: {
        type: Number,
        required: true
      },
      price: {
        type: Number,
        required: true
      },
      quantity: {
        type: Number,
        required: true
      }
    }
  ],
  categories: {
    type: [String]
  },
  //once everything is working good, make sure to change images to required: true, also try to have a name with it ("1", "2". "3", etc, "1" will be the poster picture that will show up in shoe lists).
  images: {
    type: [String]
  }
});

module.exports = Shoes = mongoose.model('shoes', ShoesSchema);

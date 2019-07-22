const mongoose = require('mongoose');

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
  color: {
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
  isUsed: {
    type: Boolean,
    required: true
  },
  //once everything is working good, make sure to change images to required: true
  images: {
    type: [String]
  }
});

module.exports = Shoes = mongoose.model('shoes', ShoesSchema);

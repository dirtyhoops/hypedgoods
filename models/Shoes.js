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
  colorway: {
    type: String,
    required: true
  },
  retail_price: {
    type: Number
  },
  release_date: {
    type: Date,
    required: true
  },
  created_at: {
    type: Date,
    default: Date.now()
  },
  pairs: [
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
  ]
});

module.exports = Shoes = mongoose.model('shoes', ShoesSchema);

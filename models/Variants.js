const mongoose = require('mongoose');

const VariantsSchema = new mongoose.Schema({
  shoes_id: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'shoes'
  },
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
});

module.exports = Variants = mongoose.model('variants', VariantsSchema);

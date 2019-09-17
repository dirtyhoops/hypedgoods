const mongoose = require('mongoose');

const OrdersSchema = new mongoose.Schema({
  customerInfo: {
    type: Object
  },
  shippingAddress: {
    type: Object
  },
  billingAddress: {
    type: Object
  },
  products: [
    {
      type: Object
    }
  ],
  subtotal: {
    type: Number,
    required: true
  },
  tax: {
    type: Number,
    required: true
  },
  shipping: {
    type: Number,
    required: true
  },
  total: {
    type: Number,
    required: true
  }
});

module.exports = Orders = mongoose.model('orders', OrdersSchema);

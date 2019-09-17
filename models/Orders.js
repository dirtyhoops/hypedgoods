const mongoose = require('mongoose');

const OrdersSchema = new mongoose.Schema({
  user_id: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'user'
  },
  email: {
    type: String,
    required: true
  },
  firstname: {
    type: String,
    required: true
  },
  lastname: {
    type: String,
    required: true
  },
  shippingAddress: {
    street: {
      type: String
    },
    apartmentunit: {
      type: String
    },
    city: {
      type: String
    },
    state: {
      type: String
    },
    zipcode: {
      type: Number
    },
    country: {
      type: String
    }
  },
  billingAddress: {
    street: {
      type: String
    },
    apartmentunit: {
      type: String
    },
    city: {
      type: String
    },
    state: {
      type: String
    },
    zipcode: {
      type: Number
    },
    country: {
      type: String
    }
  },
  products: [
    {
      product_variant_id: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'user'
      },
      brand: {
        type: String
      },
      name: {
        type: String
      },
      colorway: {
        type: String
      },
      retail_price: {
        type: Number
      },
      price: {
        type: Number
      },
      size: {
        type: Number
      }
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

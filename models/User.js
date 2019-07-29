const mongoose = require('mongoose');

const UserSchema = new mongoose.Schema({
  firstname: {
    type: String,
    required: true
  },
  lastname: {
    type: String,
    required: true
  },
  email: {
    type: String,
    required: true,
    unique: true
  },
  password: {
    type: String,
    required: true
  },
  isAdmin: {
    type: Boolean,
    default: false
  },
  address: {
    street: {
      type: String,
      default: '123 awesome st.'
    },
    city: {
      type: String,
      default: 'san jose'
    },
    state: {
      type: String,
      default: 'CA'
    },
    zipcode: {
      type: String,
      default: '90039'
    }
  }
});

module.exports = User = mongoose.model('user', UserSchema);

const express = require('express');
const router = express.Router();
const auth = require('../../middleware/auth'); //might not need this
const { ObjectId } = require('mongodb');
const User = require('../../models/User');
const Shoes = require('../../models/Shoes');
const Variants = require('../../models/Variants');
const Orders = require('../../models/Orders');

// @route     GET api/orders
// @desc      Get all the orders
// @access    Public
router.get('/', async (req, res) => {
  try {
    // Once the Shoe collection is somehat populated, try this one
    const allOrders = await Orders.find();
    res.json(allOrders);
  } catch (err) {
    console.error(err.message);
    res.status(500).send('Server Error');
  }
});

// @route    GET api/orders/:order_id
// @desc     Get order by ID
// @access   Public
router.get('/:order_id', async (req, res) => {
  try {
    let selectedOrder = await Orders.findById(req.params.order_id);

    if (!selectedOrder) {
      return res
        .status(400)
        .json({ msg: 'Order is not found, invalid order id' });
    }

    res.json(selectedOrder);
  } catch (err) {
    console.error(err.message);
    if (err.kind == 'ObjectId') {
      return res.status(400).json({ msg: 'Order is not found' });
    }
    res.status(500).send('Server Error');
  }
});

// @route     POST api/orders
// @desc      Add orders
// @access    Public

router.post('/', async (req, res) => {
  const {
    customerInfo,
    subtotal,
    taxTotal,
    shipping,
    total,
    shippingAddress,
    billingAddress,
    products
  } = req.body;

  const orderFields = {};
  if (customerInfo) orderFields.customerInfo = customerInfo;
  if (subtotal) orderFields.subtotal = subtotal;
  if (taxTotal) orderFields.tax = taxTotal;
  if (shipping) orderFields.shipping = shipping;
  if (total) orderFields.total = total;
  if (shippingAddress) orderFields.shippingAddress = shippingAddress;
  if (billingAddress) orderFields.billingAddress = billingAddress;
  if (products) orderFields.products = products;

  try {
    let newOrder = new Orders(orderFields);
    await newOrder.save();

    // Loop through the products and deduct 1 quantity from the variant
    products.map(product => {
      Variants.update(
        { _id: ObjectId(product.variant_id) },
        {
          $set: {
            quantity: 5
          }
        }
      );
    });

    res.json({ msg: 'Thank you for your order, your order is successful!' });
  } catch (err) {
    console.error(err.message);
    res.status(500).send('Server Error');
  }
});

module.exports = router;

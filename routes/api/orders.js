const express = require('express');
const router = express.Router();
const config = require('config');
const auth = require('../../middleware/auth'); //might not need this

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
    userId,
    email,
    firstname,
    lastname,
    subtotal,
    taxTotal,
    shipping,
    total
  } = req.body;

  const orderFields = {};
  if (userId) orderFields.userId = userId;
  if (email) orderFields.email = email;
  if (firstname) orderFields.firstname = firstname;
  if (lastname) orderFields.lastname = lastname;
  if (subtotal) orderFields.subtotal = subtotal;
  if (taxTotal) orderFields.tax = taxTotal;
  if (shipping) orderFields.shipping = shipping;
  if (total) orderFields.total = total;

  try {
    let newOrder = new Orders(orderFields);
    await newOrder.save();
    res.json(newOrder);
  } catch (err) {
    console.error(err.message);
    res.status(500).send('Server Error');
  }
});

// // @route     POST api/shoes
// // @desc      Add or Update shoes
// // @access    Private
// router.post(
//   '/',
//   [
//     auth,
//     [
//       check('name', 'Name is required')
//         .not()
//         .isEmpty(),
//       check('brand', 'Brand is required')
//         .not()
//         .isEmpty(),
//       check('retail_price', 'Retail Price is required')
//         .not()
//         .isEmpty(),
//       check('release_date', 'Release Date is required')
//         .not()
//         .isEmpty(),
//       check('model', 'Model is required')
//         .not()
//         .isEmpty()
//     ]
//   ],
//   async (req, res) => {
//     const errors = validationResult(req);

//     if (!errors.isEmpty()) {
//       return res.status(400).json({ errors: errors.array() });
//     }

//     const {
//       name,
//       brand,
//       colorway,
//       colors,
//       retail_price,
//       release_date,
//       date_added,
//       model,
//       images
//     } = req.body;

//     const shoesFields = {};
//     if (name) shoesFields.name = name;
//     if (brand) shoesFields.brand = brand;
//     if (colorway) shoesFields.colorway = colorway;
//     if (retail_price) shoesFields.retail_price = retail_price;
//     if (release_date) shoesFields.release_date = release_date;
//     if (date_added) shoesFields.date_added = date_added;
//     if (model) shoesFields.model = model;
//     if (colors) {
//       shoesFields.colors = colors.split(',').map(color => color.trim());
//     }
//     if (images) {
//       shoesFields.images = images.split(',').map(image => image.trim());
//     }

//     try {
//       let isUserAdmin = req.user.isAdmin;

//       if (isUserAdmin) {
//         let shoe = await Shoes.findOne({ name });

//         if (shoe) {
//           // res.send(shoe.attributes);
//           return res
//             .status(400)
//             .json({ errors: [{ msg: 'This shoes already exists(via name)' }] });
//         }
//         let newShoes = new Shoes(shoesFields);
//         await newShoes.save();
//         res.json({ msg: 'Successfully added a new shoes' });
//       } else {
//         return res.send({
//           msg: 'You cant delete an item because you are not an ADMIN'
//         });
//       }
//     } catch (err) {
//       console.error(err.message);
//       res.status(500).send('Server Error');
//     }
//   }
// );

module.exports = router;

const express = require('express');
const router = express.Router();
const { check, validationResult } = require('express-validator');
const config = require('config');
const auth = require('../../middleware/auth');

const User = require('../../models/User');
const Shoes = require('../../models/Shoes');

// @route     GET api/shoes
// @desc      Get all the shoes
// @access    Public
router.get('/', async (req, res) => {
  try {
    // Once the Shoe collection is somehat populated, try this one
    const allShoes = await Shoes.find().populate('shoes');
    res.json(allShoes);
  } catch (err) {
    console.error(err.message);
    res.status(500).send('Server Error');
  }
});

// @route     POST api/shoes
// @desc      Add or Update shoes
// @access    Private
router.post(
  '/',
  [
    auth,
    [
      check('name', 'Name is required')
        .not()
        .isEmpty(),
      check('brand', 'Brand is required')
        .not()
        .isEmpty(),
      check('product_id', 'Product ID is required')
        .not()
        .isEmpty(),
      check('release_date', 'Release Date is required')
        .not()
        .isEmpty()
    ]
  ],
  async (req, res) => {
    const errors = validationResult(req);

    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }

    const {
      name,
      brand,
      product_id,
      colorway,
      colors,
      retail_price,
      release_date,
      date_added,
      attributes,
      categories,
      images
    } = req.body;

    // @TODO:
    // 1. add ATTRIBUTES, check if the attribute that the user is trying to add is already there
    // 2. add "name" or something to "images" this is to make sure that we keep track of the poster image, and the angles of the images
    // 3. check if the "name" field already exists, and if it does, just add/update the "attributes".
    // 4. check if the "attribute.size" already exists , if it does, just add +1 to the quantity and update the price, if it doesn't create a new attribute
    const shoesFields = {};
    if (name) shoesFields.name = name;
    if (brand) shoesFields.brand = brand;
    if (product_id) shoesFields.product_id = product_id;
    if (colorway) shoesFields.colorway = colorway;
    if (retail_price) shoesFields.retail_price = retail_price;
    if (release_date) shoesFields.release_date = release_date;
    if (date_added) shoesFields.date_added = date_added;
    if (colors) {
      shoesFields.colors = colors.split(',').map(color => color.trim());
    }
    if (categories) {
      shoesFields.categories = categories
        .split(',')
        .map(category => category.trim());
    }
    if (images) {
      shoesFields.images = images.split(',').map(image => image.trim());
    }

    try {
      let isUserAdmin = req.user.isAdmin;

      if (isUserAdmin) {
        // check if the item already exists, if it does, just add/update the attributes
        let shoe = await Shoes.findOne({ name });

        // make sure to change the return res status 400 and errors, make it check the attributes, then decide what to do
        if (shoe) {
          // res.send(shoe.attributes);
          return res
            .status(400)
            .json({ errors: [{ msg: 'This shoes already exists(via name)' }] });
        }
        newShoes = new Shoes(shoesFields);
        await newShoes.save();
        res.json(newShoes);
      } else {
        return res.send('You cant add an item because you are not an ADMIN');
      }
    } catch (err) {
      console.error(err.message);
      res.status(500).send('Server Error');
    }
  }
);

module.exports = router;

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
        .isEmpty(),
      check('isUsed', 'isUsed is required')
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
      color,
      retail_price,
      release_date,
      date_added,
      attributes,
      categories,
      isUsed,
      images
    } = req.body;

    // @TODO: ADD COLOR, ATTRIBUTES, CATEGORIES, IMAGES once you figure out how to check if the current logged in user is an admin, and also check how to do shoesField if the field is an ARRAY
    const shoesFields = {};
    if (name) shoesFields.name = name;
    if (brand) shoesFields.brand = brand;
    if (product_id) shoesFields.product_id = product_id;
    if (colorway) shoesFields.colorway = colorway;
    if (retail_price) shoesFields.retail_price = retail_price;
    if (release_date) shoesFields.release_date = release_date;
    if (date_added) shoesFields.date_added = date_added;
    if (isUsed) shoesFields.isUsed = isUsed;

    try {
      let isUserAdmin = req.user.isAdmin;

      if (isUserAdmin) {
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

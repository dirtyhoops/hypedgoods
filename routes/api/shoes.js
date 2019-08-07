const express = require('express');
const router = express.Router();
const { check, validationResult } = require('express-validator');
const config = require('config');
const auth = require('../../middleware/auth');

const User = require('../../models/User');
const Shoes = require('../../models/Shoes');
const Variants = require('../../models/Variants');

// @route     GET api/shoes
// @desc      Get all the shoes
// @access    Public
router.get('/', async (req, res) => {
  try {
    // Once the Shoe collection is somehat populated, try this one
    const allShoes = await Shoes.find().sort({ date_added: -1 });
    res.json(allShoes);
  } catch (err) {
    console.error(err.message);
    res.status(500).send('Server Error');
  }
});

// @route     GET api/shoes/model/:model
// @desc      Get all the shoes that meets the param(model)
// @access    Public
router.get('/model/:model', async (req, res) => {
  try {
    // Once the Shoe collection is somewhat populated, try this one
    let allShoes = await Shoes.find({ brand: req.params.model }).populate();
    res.json(allShoes);
  } catch (err) {
    console.error(err.message);
    res.status(500).send('Server Error');
  }
});

// @route    GET api/shoes/:shoe_id
// @desc     Get shoe by ID
// @access   Public
router.get('/:shoes_id', async (req, res) => {
  try {
    let selectedShoe = await Shoes.findById(req.params.shoes_id).populate();

    if (!selectedShoe) {
      return res.status(400).json({ msg: 'Shoe is not found' });
    }

    res.json(selectedShoe);
  } catch (err) {
    console.error(err.message);
    if (err.kind == 'ObjectId') {
      return res.status(400).json({ msg: 'Shoe is not found' });
    }
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
      check('retail_price', 'Retail Price is required')
        .not()
        .isEmpty(),
      check('release_date', 'Release Date is required')
        .not()
        .isEmpty(),
      check('model', 'Model is required')
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
      colorway,
      colors,
      retail_price,
      release_date,
      date_added,
      model,
      images
    } = req.body;

    const shoesFields = {};
    if (name) shoesFields.name = name;
    if (brand) shoesFields.brand = brand;
    if (colorway) shoesFields.colorway = colorway;
    if (retail_price) shoesFields.retail_price = retail_price;
    if (release_date) shoesFields.release_date = release_date;
    if (date_added) shoesFields.date_added = date_added;
    if (model) shoesFields.model = model;
    if (colors) {
      shoesFields.colors = colors.split(',').map(color => color.trim());
    }
    if (images) {
      shoesFields.images = images.split(',').map(image => image.trim());
    }

    try {
      let isUserAdmin = req.user.isAdmin;

      if (isUserAdmin) {
        let shoe = await Shoes.findOne({ name });

        if (shoe) {
          // res.send(shoe.attributes);
          return res
            .status(400)
            .json({ errors: [{ msg: 'This shoes already exists(via name)' }] });
        }
        let newShoes = new Shoes(shoesFields);
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

/******************** SHOE VARIANTS ***********************/

// @route    GET api/shoes/:shoe_id/variants
// @desc     Get variants of the shoes by shoe_id
// @access   Public
router.get('/:shoes_id/variants', async (req, res) => {
  try {
    let selectedShoeVariants = await Variants.find({
      shoes_id: req.params.shoes_id
    }).sort({ size: 1 });

    if (!selectedShoeVariants) {
      return res.status(400).json({ msg: 'Shoe Variants are not found' });
    }

    res.json(selectedShoeVariants);
  } catch (err) {
    console.error(err.message);
    if (err.kind == 'ObjectId') {
      return res.status(400).json({ msg: 'Shoe is not found' });
    }
    res.status(500).send('Server Error');
  }
});

// @route    POST api/shoes/:shoes_id/variants
// @desc     POST shoe by ID
// @access   Private
router.post(
  '/:shoes_id/variants',
  [
    auth,
    [
      check('size', 'Size is required')
        .not()
        .isEmpty(),
      check('price', 'Price is required')
        .not()
        .isEmpty(),
      check('quantity', 'Quantity is required')
        .not()
        .isEmpty()
    ]
  ],
  async (req, res) => {
    const errors = validationResult(req);

    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }

    const { size, price, quantity } = req.body;

    // Build variants object
    const variantsFields = {};

    variantsFields.shoes_id = req.params.shoes_id;
    if (size) variantsFields.size = size;
    if (price) variantsFields.price = price;
    if (quantity) variantsFields.quantity = quantity;

    try {
      let isUserAdmin = req.user.isAdmin;

      // Checks if the user is an admin with admin priviledge
      if (isUserAdmin) {
        console.log('checking if shoes exists');
        console.log('shoe id is', req.params.shoes_id);
        const shoes = await Shoes.findById(req.params.shoes_id);

        if (shoes) {
          // Creates the new variant
          let newVariant = new Variants(variantsFields);
          await newVariant.save();
          res.json(newVariant);
        }
      } else {
        return res.send('You cant add an item because you are not an ADMIN');
      }
    } catch (err) {
      if (err.kind === 'ObjectId') {
        console.error('The shoes with the given ID was not found');
        return res
          .status(404)
          .json({ msg: 'The shoes with the given ID was not found' });
      }
      console.error(err.message);
      res.status(500).send('Server Error');
    }
  }
);

module.exports = router;

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
    let allShoes = await Shoes.find({ brand: req.params.model });
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
    let selectedShoe = await Shoes.findById(req.params.shoes_id);

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

// @route    DELETE api/shoes/:shoes_id
// @desc     Delete shoes
// @access   Private
router.delete('/:shoes_id', auth, async (req, res) => {
  // @TODO: add an admin security check
  try {
    let isUserAdmin = req.user.isAdmin;

    // Checks if the user is an admin with admin priviledge
    if (isUserAdmin) {
      // Remove variants of the shoes
      await Variants.deleteMany({ shoes_id: req.params.shoes_id });

      // Remove the shoes
      await Shoes.findByIdAndRemove({ _id: req.params.shoes_id });

      res.json({ msg: 'Shoes and its Variants are deleted' });
    } else {
      return res.send('You cant delete an item because you are not an ADMIN');
    }
  } catch (err) {
    console.error(err.message);
    res.status(500).send('Server Error');
  }
});

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
// @desc     ADD shoe variant to a pair of shoes
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
        let shoes = await Shoes.findById(req.params.shoes_id);

        if (shoes) {
          // Creates the new variant
          const shoeVariant = await Variants.find({
            $and: [
              { shoes_id: variantsFields.shoes_id },
              { size: variantsFields.size }
            ]
          });

          if (shoeVariant.length > 0) {
            return res.status(400).json({
              errors: [
                {
                  msg: 'You cant add this size, it already is in the inventory'
                }
              ]
            });
          }

          let newVariant = new Variants(variantsFields);
          let lowestPrice = price;

          if (shoes.lowest_price < lowestPrice && shoes.lowest_price != 0) {
            lowestPrice = shoes.lowest_price;
          }

          await Shoes.updateOne(
            { _id: req.params.shoes_id },
            {
              $set: {
                total_quantity:
                  parseInt(shoes.total_quantity) + parseInt(quantity),
                lowest_price: lowestPrice
              }
            }
          );

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

// @route    GET api/shoes/variants/:variant_id
// @desc     Get variant by ID
// @access   Public
router.get('/variants/:variant_id', async (req, res) => {
  try {
    let selectedVariant = await Variants.findById(req.params.variant_id);

    if (!selectedVariant) {
      return res.status(400).json({ msg: 'Shoe Variant is not found' });
    }

    res.json(selectedVariant);
  } catch (err) {
    console.error(err.message);
    if (err.kind == 'ObjectId') {
      return res.status(400).json({ msg: 'Shoe Variant is not found' });
    }
    res.status(500).send('Server Error');
  }
});

// @route    DELETE api/shoes/variants/:variant_id/:shoes_id
// @desc     Delete a variant of a shoe
// @access   Private
router.delete('/variants/:variant_id/:shoes_id', auth, async (req, res) => {
  try {
    let isUserAdmin = req.user.isAdmin;

    // Checks if the user is an admin with admin priviledge
    if (isUserAdmin) {
      let shoes = await Shoes.findById(req.params.shoes_id);
      let selectedVariant = await Variants.findById(req.params.variant_id);

      // let lowestPrice = shoes.lowest_price;

      // if (shoes.lowest_price < lowestPrice && shoes.lowest_price != 0) {
      //   lowestPrice = shoes.lowest_price;
      // }

      // await Shoes.updateOne(
      //   { _id: req.params.shoes_id },
      //   {
      //     $set: {
      //       total_quantity: parseInt(shoes.total_quantity) + parseInt(quantity),
      //       lowest_price: lowestPrice
      //     }
      //   }
      // );

      // Updates the total count of the shoes
      await Shoes.updateOne(
        { _id: req.params.shoes_id },
        {
          $set: {
            total_quantity:
              parseInt(shoes.total_quantity) -
              parseInt(selectedVariant.quantity)
          }
        }
      );

      // Remove the shoes
      await Variants.findByIdAndRemove({ _id: req.params.variant_id });

      res.json({ msg: 'Shoes variant is successfully deleted' });
    } else {
      return res.send(
        'You cant remove a shoe variant because you are not an ADMIN'
      );
    }
  } catch (err) {
    console.error(err.message);
    res.status(500).send('Server Error');
  }
});

module.exports = router;

// TO UPDATE THE LOWEST PRICED ITEM AND THE TOTAL QUANTITY

// let allVariants = await Variants.find({
//   shoes_id: req.params.shoes_id
// });

// let allShoeQuantity = 0;
// let lowestPrice = newVariant.price;

// allVariants.map(variant => {
//   allShoeQuantity = allShoeQuantity + parseInt(variant.quantity);
//   if (variant.price < lowestPrice) {
//     lowestPrice = variant.price;
//   }
// });

// // let newQuantity = parseInt(allShoeQuantity);

// await Shoes.updateOne(
//   { _id: req.params.shoes_id },
//   {
//     $set: {
//       total_quantity: parseInt(allShoeQuantity) + parseInt(quantity),
//       lowest_price: lowestPrice
//     }
//   }
// );

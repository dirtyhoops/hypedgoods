const express = require('express');
const router = express.Router();
const { check, validationResult } = require('express-validator');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const config = require('config');

// Importing the User schema
const User = require('../../models/User');

// @route     POST api/users
// @desc      Register user
// @access    Public
router.post(
  '/',
  [
    check('firstname', 'First Name is required')
      .not()
      .isEmpty(),
    check('lastname', 'Lastname Name is required')
      .not()
      .isEmpty(),
    check('email', 'Include a valid email').isEmail(),
    check(
      'password',
      'Please enter a password with 6 or more characters'
    ).isLength({ min: 6 })
  ],
  async (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }

    // just deconstruct firstname, lastname, email, and password, isAdmin from req.body;
    const { firstname, lastname, email, password, isAdmin } = req.body;

    try {
      // See if user exists
      let user = await User.findOne({ email });

      if (user) {
        return res
          .status(400)
          .json({ errors: [{ msg: 'User already exists' }] });
      }

      user = new User({
        firstname,
        lastname,
        email,
        password,
        isAdmin
      });

      // Encrypt password
      const salt = await bcrypt.genSalt(10);
      user.password = await bcrypt.hash(password, salt);

      await user.save();

      // Return jsonwebtoken
      const payload = {
        user: {
          id: user.id
        }
      };

      // @todo: change the expiresIn: 3600   ---> so it's only for 1 hour
      jwt.sign(
        payload,
        config.get('jwtSecret'),
        { expiresIn: 36000 },
        (err, token) => {
          if (err) throw err;
          // prints out the token
          res.json({ token });
        }
      );
    } catch (err) {
      console.error(err.message);
      res.status(500).send('Server Error');
    }
  }
);

module.exports = router;

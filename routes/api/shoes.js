const express = require('express');
const router = express.Router();

// @route     GET api/shoes
// @desc      Test route
// @access    Public
router.get('/', (req, res) => res.send('Shoes route'));

module.exports = router;

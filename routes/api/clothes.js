const express = require('express');
const router = express.Router();

// @route     GET api/clothes
// @desc      Test route
// @access    Public
router.get('/', (req, res) => res.send('Clothes route'));

module.exports = router;

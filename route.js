const express = require('express');
const router = express.Router();
const cors = require('cors');
const constants = require('./constants')

router.get('/', cors(), function(req, res) {
  res.json(constants.weather)
});
router.get('/test', function(req, res) {
  res.send("l");
});

module.exports = router;

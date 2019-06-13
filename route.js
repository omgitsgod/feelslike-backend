const express = require('express');
const router = express.Router();

router.get('/', function(req, res) {
  res.send('<h1>Hello World</h1>');
});
router.get('/contact', function(req, res) {
  res.send('Contact Page Information');
});

module.exports = router;

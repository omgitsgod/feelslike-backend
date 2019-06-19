const express = require('express');
require('dotenv').config();
const cors = require('cors');
const fetch   = require('node-fetch');
const api = process.env.WEATHERAPI

const app = express();
const port = process.env.PORT || 5000;

app.listen(port, function() {
  console.log('app is up and running  on port '+port);
});
app.get('/test/:x/:y', cors(), function(req, res) {
  console.log(req.params);
  const url = `https://api.darksky.net/forecast/${api}/${req.params.x},${req.params.y}`
  fetch(url)
  .then(res => res.json())
  .then(r => res.send(r))
});

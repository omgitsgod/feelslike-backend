const express = require('express');
require('dotenv').config();
const constants = require('./constants')
const cors = require('cors')
const fetch   = require('node-fetch');
const api = process.env.WEATHERAPI

const app = express();
const port = process.env.PORT || 5000;
const route = require('./route')

app.get('/', route);
app.listen(port, function() {
  console.log('app is running  on port '+port);
  console.log(process.env.AHHH);
});
app.get('/test/:x/:y', cors(), function(req, res) {
  console.log(req.params);
  //${req.params.x},${req.params.y}
  const url = `https://api.darksky.net/forecast/${api}/40.7207851,-73.97980369999999`
  fetch(url)
  .then(res => res.json())
  .then(res.json)
});

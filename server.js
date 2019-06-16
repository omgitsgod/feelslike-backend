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
  const url = `https://cors-anywhere.herokuapp.com/https://api.darksky.net/forecast/${api}/${req.params.x},${req.params.y}`
  fetch(url)
  .then(data => {console.log(data);res.send({data})})
});

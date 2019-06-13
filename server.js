const express = require('express');

const app = express();
const port = process.env.port || 3000;

app.get('/', function(req, res) {
  res.send('Response recorded for Homepage!!');
});
app.listen(port, function() {
  console.log('app is running  on port 3000');
});

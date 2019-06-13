const express = require('express');

let app = express();

app.get('/', function(req, res) {
  res.send('Response recorded for Homepage');
});
app.listen(3000, function() {
  console.log('app is running  on port 3000');
});

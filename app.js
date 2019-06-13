const express = require('express');

let app = express();

const route = require('./route');

app.use('/', route);

app.listen(3000, function() {
  console.log('app is running on port 3000');
});

const express = require('express');

const app = express();
const port = process.env.PORT || 3000;
const route = require('./route')

app.get('/', route);
app.listen(port, function() {
  console.log('app is running  on port '+port);
});

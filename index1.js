'use strict';

const express = require('express');
const PORT = 8081;
const app = express();
app.get('/', function(req, res){
  res.send('Hello world\n');
});
app.listen(PORT);
console.log('Running on '+PORT);

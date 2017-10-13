const PORT = 5002;
var express = require('express');
var app = express();
var server = app.listen(PORT, function () {
  console.log('Arrow.io running on port : ' + PORT);
});
app.use(express.static('public'));

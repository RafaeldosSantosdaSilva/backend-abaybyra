const express = require('express');
const consign = require('consign');
const bodyParser = require('body-parser'); //depencia que recebe paramentros post
const app = express();
const cors = require('cors');

app.use(function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  next();
});
// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }))

// parse application/json
app.use(bodyParser.json())


app.set('view engine', 'ejs');
app.set('views', '././app/views')

app.use(express.json());

consign()
.include('././app/routes')
.then('././app/config/database.js')
.then('././app/models')
.into(app)





module.exports = app;
const express = require('express');
const consign = require('consign');
<<<<<<< HEAD
const bodyParser = require('body-parser'); //depencia que recebe paramentros post
const{check, validationResult} = require('express-validator');
=======
const bodyParser = require('body-parser'); 
>>>>>>> 6fd059ea7c2054f215451c2f97fecb824a933f81
const app = express();


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
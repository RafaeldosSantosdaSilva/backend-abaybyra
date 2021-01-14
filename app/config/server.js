const express = require('express');
const consign = require('consign');

const app = express();

app.set('view engine', 'ejs');
app.set('views', '././app/views')

app.use(express.json());

consign()
.include('././app/routes')
.then('././app/config/database.js')
.then('././app/models')
.into(app)

app.get(/^(.*(?!teste)).*$/, function(req,res){
  res.render('error');
}) 

module.exports = app;
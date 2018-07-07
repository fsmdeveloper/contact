const express = require("express");
const mongoose = require("mongoose");
const app = express();

const url = 'mongodb://admin:admin369147@ds223161.mlab.com:23161/db_contact'
mongoose.connect(url).then(res => {
  console.log('Mongo connected!');
}).catch(err => console.log(err));

app.get('/', (req, res) => {
  res.send({
    msg: 'Working'
  });
});



module.exports = app;
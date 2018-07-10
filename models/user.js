const mongoose = require('../config/db');

const Schema = mongoose.Schema;

const UserSchema = new Schema({
  email: {
    type: String,
    required: true,
    unique: true
  },
  name: {
    type: String,
    required: true
  },
  password: {
    type: String,
    min: 8
  }

});

const User = mongoose.model('User', UserSchema);



module.exports = User;
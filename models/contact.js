const mongoose = require('../config/db');
const Schema = mongoose.Schema;

const ContactSchema = new Schema({
  name: {
    type: String,
    required: true,
  },
  userID: {
    type: String
  },
  phoneNumber: {
    type: String,
    required: true,
  },
  facebookID: {
    type: String,
    required: true,
  },
  address: {
    street: String,
    city: String,
    zip: String,
    country: String,
  },
  isFavorite: {
    type: Boolean,
    default: false
  }
});

const Contact = mongoose.model('Contact', ContactSchema);


module.exports = Contact;
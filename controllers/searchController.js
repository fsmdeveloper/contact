const Contact = require('../models/contact');
const jwt = require('jsonwebtoken');
const _ = require('lodash');

const searchController = {};

searchController.getContactsBySearchQuery = async (req, res) => {

  try {


  } catch (error) {
    throw new Error(`Error: ${error}`);
  }
}

module.exports = searchController;
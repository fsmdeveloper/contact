const Contact = require('../models/contact');
const jwt = require('jsonwebtoken');
const _ = require('lodash');

const contactController = {};

// Fetch All Contacts
contactController.getContacts = async (req, res) => {

  try {

    const allContacts = await Contact.find();


    res.send(allContacts);

  } catch (error) {
    throw new Error(`Error: ${error}`);
  }

}

// Fetch Single Contact By Given ID
contactController.getContactByID = async (req, res) => {

  try {

    const singleContact = await Contact.findById(_.pick(req.body, ['_id']));

    res.send(singleContact);

  } catch (error) {
    throw new Error(`Error: ${error}`);
  }

}

// Create Single Contact
contactController.createContact = async (req, res) => {

  try {

    const createdContact = await Contact.create({
      userID: req.user._id,
      name: req.body.name,
      phoneNumber: req.body.phoneNumber,
      facebookID: req.body.facebookID,
      address: req.body.address
    });

    res.status(201).send(createdContact);



  } catch (error) {
    throw new Error(`Error: ${error}`);
  }
}


// Update Single Contact By Given ID
contactController.updateContactByID = async (req, res) => {

  try {
    const id = req.params.id;

    const updatedContact = await Contact.findOneAndUpdate(id, req.body);

    console.log(updatedContact);


    res.status(201).send(updatedContact);

  } catch (error) {
    throw new Error(`Error: ${error}`);
  }


}

// Delete Single Contact By Given ID
contactController.deleteContactByID = async (req, res) => {

  try {

    const id = req.params.id;

    const deletedContact = await Contact.findByIdAndRemove({
      _id: id
    });

    res.send({
      message: 'Deleted Successfully',
      deletedContact
    });

  } catch (error) {
    throw new Error(`Error: ${error}`);
  }

}

module.exports = contactController;
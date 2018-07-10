const route = require('express').Router();

// Controller
const userController = require('../controllers/userController');
const contactController = require('../controllers/contactController');
const searchController = require('../controllers/searchController');
// Middleware
const auth = require('../middleware/auth');

// -------------------------------------------------------------------------
// @Route (POST)   /api/register
// @Desc          Register User
// @Access        Public
// -----------------------------
route.post('/register', userController.register);


// @Route (POST)   /api/login
// @Desc          Login User
// @Access        Public
// -----------------------------
route.post('/login', userController.login);


// -------------------------------------------------------------------------

// -------------------------------------------------------------------------
// @Route (GET)   /api/contacts
// @Desc          Fetch All Contacts
// @Access        Protected
// -----------------------------
route.get('/contacts', auth, contactController.getContacts);


// @Route (GET)   /api/contact/id
// @Desc          Fetch Single Contact By Given ID
// @Access        Protected
// -----------------------------
route.get('/contact/:id', auth, contactController.getContactByID);


// @Route (POST)   /api/contacts
// @Desc          Create Single Contact
// @Access        Protected
// -----------------------------
route.post('/contacts', auth, contactController.createContact);

// @Route (PUT)   /api/contact/id
// @Desc          Update Single Contact By Given ID
// @Access        Protected
// -----------------------------
route.put('/contact/:id', auth, contactController.updateContactByID);

// @Route (DELETE)   /api/contact/id
// @Desc          Delete Single Contact By Given ID
// @Access        Protected
// -----------------------------
route.delete('/contact/:id', auth, contactController.deleteContactByID);

// -------------------------------------------------------------------------

// -------------------------------------------------------------------------

// @Route (GET)   /search/query
// @Desc          Search Contact By Query
// @Access        Protected
// -----------------------------
route.get('/search', auth, searchController.getContactsBySearchQuery);


module.exports = route;
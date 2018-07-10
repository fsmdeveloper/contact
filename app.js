const app = require("express")();
const bodyParser = require('body-parser');
const routes = require('./routes/api');

//Middleware
app.use(bodyParser.json());
// API Endpoint
app.use('/api', routes);

module.exports = app;
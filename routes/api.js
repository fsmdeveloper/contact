const route = require('express').Router();

route.get('/', (req, res) => {
  res.send({
    msg: 'Working!'
  });
});

module.exports = route;
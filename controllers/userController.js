const User = require('../models/user');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const _ = require('lodash');

const userController = {};

// Register Controller
userController.register = async (req, res) => {
  try {

    const plainPassword = req.body.password;

    const hashedPassword = await bcrypt.hash(plainPassword, 10);

    req.body.password = hashedPassword;

    const isAlreadyUser = await User.findOne(_.pick(req.body, ['email']));

    if (isAlreadyUser) {
      return res.status(409).send({
        message: 'User already exist'
      });
    }

    const createdUser = await User.create(
      _.pick(req.body, ['email', 'name', 'password'])
    );

    res.status(201).send(_.pick(createdUser, ['_id', 'email', 'name']));

  } catch (error) {
    throw new Error(`Error ${error}`);
  }

}

// Login Controller
userController.login = async (req, res) => {

  try {

    const validatedUser = await User.findOne(_.pick(req.body, ['email']));


    if (!validatedUser) {

      return res.status(400).send({
        message: 'Invalid Email or password'
      });
    }
    // If Email Valid
    const isPasswordValid = await bcrypt.compare(req.body.password, validatedUser.password);

    if (!isPasswordValid) {
      return res.status(400).send({
        message: 'Invalid Email or password'
      });
    }

    const payload = _.pick(validatedUser, ['_id', 'email', 'name']);

    const token = jwt.sign(payload, 'secretKey', {
      expiresIn: '1h'
    });

    res.header('x-auth-token', token).send({
      message: 'Login Successfully',
      token: token
    });

    // console.log(JSON.stringify(req.headers));

  } catch (error) {

    throw new Error(`Error: ${error}`);
  }
}

module.exports = userController;
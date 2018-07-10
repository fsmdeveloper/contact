const jwt = require('jsonwebtoken');

module.exports = async (req, res, next) => {
  try {

    const token = req.header('x-auth-token');

    if (!token) {
      return res.status(401).send('Access Denied. No token provided!');
    }

    const decodedPayload = jwt.verify(token, 'secretKey');

    req.user = decodedPayload;

    next();

  } catch (ex) {
    res.status(400).send('Invalid Token');
  }
}
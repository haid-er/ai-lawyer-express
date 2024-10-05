require("dotenv").config();
const jwt = require('jsonwebtoken');

const generateToken = (data, expiresIn = '1h') => {
  const options = {
    expiresIn,
  };
  return jwt.sign(data, process.env.JWT_SECRET, options);
};

const verifyToken = (token) => jwt.verify(token, process.env.JWT_SECRET);

const decode = (token) => jwt.decode(token, process.env.JWT_SECRET);

module.exports = {
  generateToken,
  verifyToken,
  decode,
};

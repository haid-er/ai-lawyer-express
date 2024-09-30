const { hash } = require("bcrypt");

const generateHash = (password) => hash(password, 10);

module.exports = generateHash;
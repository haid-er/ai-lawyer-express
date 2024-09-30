const { compare } = require("bcrypt");

const compareHash = (password, hash) => compare(password, hash);

module.exports = compareHash;
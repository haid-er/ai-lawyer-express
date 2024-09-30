const compareHash = require("../utils/compareHash");
const generateHash = require("../utils/generateHash");
const User = require("../models/user.model")
const registerController = async (req, res) => {
    const { firstName, lastName, email, nickName, password } = req.body;
    const hashedPassword = await generateHash(password);
    const comparison = await compareHash(password, hashedPassword);
    console.log(User)
    res.json({
        firstName,
        lastName,
        lastName,
        email,
        nickName,
        password,
        hashedPassword,
        comparison
    })
}

module.exports = registerController;
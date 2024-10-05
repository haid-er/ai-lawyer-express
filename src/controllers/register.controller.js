const { User } = require("../models/index")
const generateHash = require("../utils/generateHash");
const userModel = require("../models/user.model");
const registerController = async (req, res, next) => {
    const { firstName, lastName, nickName, password, phone } = req.body;
    const email = req.body.email.toLowerCase();
    try {
        const userAlreadyExist = await User.findOne({
            where: {
                email,
            }
        })
        if (userAlreadyExist) {
            res.status(409).json({
                status: 'error',
                message: "Email Already Registered!",
            })
            return;
        }
        const username = await User.generateUsername(firstName, lastName);
        console.log(username)
        const passwordHash = await generateHash(password);
        const createdUser = User.create({
            firstName,
            lastName,
            phone,
            nickName,
            email,
            username,
            password: passwordHash,


        });
        return res.status(200).json({
            status: 'success',
            message: "User Registered Successfully",
        })
    } catch (error) {
        next(error)
    }
}

module.exports = registerController;
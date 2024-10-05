const { User } = require("../models/index")
const compareHash = require("../utils/compareHash")
const { generateToken } = require("../utils/jwt")
const loginController = async (req, res, next) => {
    const { email, password } = req.body;

    try {
        const user = await User.findOne({
            where: { email },
        });

        if (!user) {
            const error = new Error('invalid_credentials');
            error.statusCode = 401;
            throw error;
        }

        const isMatch = await compareHash(password, user.password);
        if (!isMatch) {
            const error = new Error('invalid_credentials');
            error.statusCode = 401;
            throw error;
        }

        const token = generateToken(
            {
                userId: user.userId,
                email: user.email,
            },
            '24h',
        );

        res.status(200).send({
            message: 'User Logged In successfully',
            token,
            data: {
                user: {
                    userId: user.userId,
                    firstName: user.firstName,
                    lastName: user.lastName,
                    email: user.email,
                }
            }
        });
    } catch (error) {
        next(error);
    }
}

module.exports = loginController;
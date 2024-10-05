const { check, validationResult } = require("express-validator")

const loginValidator = [
    check('email')
        .trim()
        .notEmpty()
        .withMessage('Email is required')
        .isEmail()
        .withMessage('Invalid email format')
        .isLength({ max: 50 })
        .withMessage('Email must be less than 50 characters'),

    check('password')
        .trim()
        .notEmpty()
        .withMessage('Password is required'),
    (req, res, next) => {
        const errors = validationResult(req);
        if (!errors.isEmpty()) {
            return res.status(403).json({
                status: 'error',
                message: 'validation_error',
                errors: errors.array(),
            });
        }
        return next();
    },
];

module.exports = loginValidator;
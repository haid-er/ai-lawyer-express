const router = require("express").Router();
const pingController = require("../controllers/ping.controller");
const registerController = require("../controllers/register.controller");
const registerValidator = require("../validators/register.validator");


router.get('/ping', pingController);

router.post('/register', registerValidator, registerController);

module.exports = router;
const router = require("express").Router();
const loginController = require("../controllers/login.controller");
const registerController = require("../controllers/register.controller");
const registerValidator = require("../validators/register.validator");
const loginValidator = require("../validators/login.validator");
const meController = require("../controllers/me.controller");
const authenticateMiddleware = require("../middlewares/authenticate.middleware");

router.post('/register', registerValidator, registerController);
router.post('/login', loginValidator, loginController)
router.get('/me', authenticateMiddleware, meController)
module.exports = router;
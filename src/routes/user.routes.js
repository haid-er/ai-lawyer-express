const router = require("express").Router();
const dummyChatController = require("../controllers/dummyChat.controller");
const authenticateMiddleware = require("../middlewares/authenticate.middleware");

router.post('/chat', authenticateMiddleware, dummyChatController);
module.exports = router;
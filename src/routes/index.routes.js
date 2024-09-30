const router = require("express").Router();
const homeRoutes = require("./home.routes")
const authRoutes = require("./auth.routes")

router.use('/', homeRoutes);
router.use('/auth', authRoutes);

module.exports = router;
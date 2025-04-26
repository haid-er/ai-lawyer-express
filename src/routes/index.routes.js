const router = require("express").Router();
const homeRoutes = require("./home.routes")
const authRoutes = require("./auth.routes")
const userRoutes = require("./user.routes")
router.use('/', homeRoutes);
router.use('/auth', authRoutes);
router.use('/user', userRoutes)

module.exports = router;
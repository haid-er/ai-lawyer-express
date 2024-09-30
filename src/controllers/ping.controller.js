
const pingController = (req, res) => {
    res.status(200).json({
        message: `Server is running on port ${process.env.PORT}`
    })
}

module.exports = pingController;
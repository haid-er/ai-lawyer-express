const meController = async (req, res, next) => {
    res.status(200).send({
        message: 'success',
        data: {
            user: { ...req.user }
        },
    });
}

module.exports = meController;
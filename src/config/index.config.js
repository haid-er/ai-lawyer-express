
const express = require('express')

const router = require("../routes/index.routes");
const config = (app) => {
    app.use(express.json())
    app.use('/api', router);
};

module.exports = config;
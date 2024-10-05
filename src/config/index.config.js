const express = require('express')
const globalErrorHandler = require("./globalErrorHandler")
const cors = require("cors");
const router = require("../routes/index.routes");
const config = (app) => {
    app.use(cors());
    app.use(express.json())
    app.use('/api', router);
    app.use(globalErrorHandler);
};

module.exports = config;
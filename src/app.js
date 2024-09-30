require('dotenv').config();
const express = require('express');
const config = require("./config/index.config")
const app = express();
const port = process.env.PORT || 3333;

config(app);

app.listen(port, () => {
    console.log(`Server running at http://localhost:${port}`);
});
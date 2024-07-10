const express = require("express");
const connetDB = require("./src/db");
const app = express();
const port = 3000;
require("dotenv").config();

app.get("/", (req, res) => {
    res.send("Hello World!");
});

connetDB();

app.listen(port, () => {
    console.log(`Example app listening on port ${port}!`);
});

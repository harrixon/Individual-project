const express = require("express");
const bodyParser = require("body-parser");
const path = require("path");

const app = express();

app.use(bodyParser.urlencoded({extended: false}));
app.use(express.static("public"));

app.use("/", (req, res) => {
    res.send("index.html");
});

app.listen("8080");

var express = require('express');
require('dotenv').config();
var app = express();


console.log("Hello World");
console.log(process.env.MESSAGE_STYLE);
app.use("/public", express.static(__dirname + "/public"));
app.get("/", (req, res) => {
    res.sendFile(__dirname + '/views/index.html');
});

app.get("/json", (req, res) => {
    let message = "Hello json";
    message = process.env.MESSAGE_STYLE == "uppercase" ? message.toUpperCase() : message;
    res.json({
        message: message
    });
});

 module.exports = app;

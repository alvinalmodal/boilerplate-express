require("dotenv").config();
var express = require("express");
var path = require("path");
var app = express();

app.use("/public", express.static(path.join(__dirname, "public")));

app.get("/", (req, res) => {
  let absolutePath = __dirname + "/views/index.html";
  res.sendFile(absolutePath);
});

app.get("/json", (req, res) => {
  let message = "Hello json";
  message =
    process.env.MESSAGE_STYLE == "uppercase" ? message.toUpperCase() : message;
  res.send({ message });
});

module.exports = app;

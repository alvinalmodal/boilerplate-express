require("dotenv").config();
var express = require("express");
var path = require("path");
var app = express();

const logger = (req, res, next) => {
  console.log(`${req.method} ${req.path} - ${req.ip}`);
  next();
};

const timeStamp = (req, res, next) => {
  req.time = new Date().toString();
  next();
};

app.use("/public", express.static(path.join(__dirname, "public")));

app.get("/", logger, (req, res) => {
  let absolutePath = __dirname + "/views/index.html";
  res.sendFile(absolutePath);
});

app.get("/json", logger, (req, res) => {
  let message = "Hello json";
  message =
    process.env.MESSAGE_STYLE == "uppercase" ? message.toUpperCase() : message;
  res.send({ message });
});

app.get("/now", timeStamp, (req, res) => {
  res.send({ time: req.time });
});

app.get("/:word/echo", (req, res) => {
  let { word } = req.params;
  res.send({ echo: word });
});

module.exports = app;

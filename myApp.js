var express = require("express");
var path = require("path");
var app = express();

app.use("/public", express.static(path.join(__dirname, "public")));

app.get("/", (req, res) => {
  let absolutePath = __dirname + "/views/index.html";
  res.sendFile(absolutePath);
});

module.exports = app;

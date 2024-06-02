const express = require("express");
const http = require("http");
const createError = require("http-errors");
const mongoose = require("mongoose");

const app = express();
const port = 3000;

const server = http.createServer(app);

mongoose.connect("BURAYA MONGODB CONNECTION STRINGINIZI YAZINIZ.", {
  dbName: "uby-nodejs-test",
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

app.use((req, res, next) => {
  res.locals.errors = [];
  next();
});

app.use(express.json({ limit: "50mb" }));
app.use(express.urlencoded({ extended: true, limit: "50mb" }));

app.use("/", require("./routes"));

app.use(function (req, res, next) {
  next(createError(404, "Not Found " + req.originalUrl));
});

server.listen(port, () => {
  console.log("Backend sunucusu ayagi kalkti.");
});

module.exports = app;

require("dotenv").config();
const { PORT = 3000 } = process.env;
const express = require("express");
const server = express();

const apiRouter = require("./api");
server.use("/api", apiRouter);

const morgan = require("morgan");
server.use(morgan("dev"));

server.use(express.json());

server.use((req, res, next) => {
  console.log("<____Body Logger START____>");
  console.log(req.body);
  console.log("<_____Body Logger END_____>");

  next();
});

server.get("/api", (req, res, next) => {
  console.log("A get request was made to /api");
  res.send({ message: "success" });
});

const { client } = require("./db");
client.connect();

server.listen(PORT, () => {
  console.log("The server is up on port", PORT);
});

module.exports = server;

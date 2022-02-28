const express = require("express");
const { getAllTags } = require("../db");
const tagsRouter = express.Router();

tagsRouter.get("/", async (req, res, next) => {
  console.log("A get request was made to /tags");
  res.send(await getAllTags());
});

module.exports = tagsRouter;

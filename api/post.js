const express = require("express");
const { getAllPosts } = require("../db");
const postRouter = express.Router();

postRouter.get("/", async (req, res, next) => {
  console.log("A get request was made to /posts");
  res.send(await getAllPosts());
});

module.exports = postRouter;

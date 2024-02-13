"use strict";
const User = require("./user"); //require the model
const Post = require("./post"); //require the model
const Like = require("./like"); //require the model
const Comment = require("./comment"); //require the model

async function init() {
  await User.sync();
  await Post.sync();
  await Like.sync();
  await Comment.sync();
}

init();
module.exports = {
  User,
  Post,
  Like,
  Comment
};
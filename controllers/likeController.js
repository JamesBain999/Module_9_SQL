"use strict";
const Models = require("../models");

// finds all Likes in DB, then sends array as response
const getLikes = (res) => {
  Models.Like.findAll({})
    .then((data) => {
      res.send({ result: 200, data: data });
    })
    .catch((err) => {
      console.log(err);
      res.send({ result: 500, error: err.message });
    });
};

// uses JSON from request body to create new Like in DB
const createLike = (data, res) => {
  Models.Like.create(data)
    .then((data) => {
      res.send({ result: 200, data: data });
    })
    .catch((err) => {
      console.log(err);
      res.send({ result: 500, error: err.message });
    });
};

module.exports = {
  getLikes,
  createLike,
};

"use strict";
const Models = require("../models");

const getCartoons = (res) => {
  Models.Cartoon.findAll({})
    .then((data) => {
      res.send({ result: 200, data: data });
    })
    .catch((err) => {
      console.log(err);
      res.send({ result: 500, error: err.message });
    });
};

module.exports = {
  getCartoons,
};

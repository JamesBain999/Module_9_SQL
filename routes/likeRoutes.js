const express = require("express");
const router = express.Router();
const Controllers = require("../controllers");

router.get("/", (req, res) => {
  Controllers.likeController.getLikes(res);
});

router.post("/create", (req, res) => {
  Controllers.likeController.createLike(req.body, res);
});

module.exports = router;

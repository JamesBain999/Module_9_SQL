const express = require("express");
const router = express.Router();
const Controllers = require("../controllers");

router.get("/", (req, res) => {
  Controllers.cartoonController.getCartoons(res);
});

router.get("/search", (req, res) => {
  Controllers.cartoonController.dataFetcher(req.query, res);
});

router.get("/:category", (req, res) => {
  Controllers.cartoonController.dataFetcherAgain(req, res);
});

module.exports = router;

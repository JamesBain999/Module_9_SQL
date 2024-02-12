const express = require("express");
const router = express.Router();
const Controllers = require("../controllers");

router.get("/", (req, res) => {
  Controllers.cartoonController.getCartoons(res);
});

module.exports = router;
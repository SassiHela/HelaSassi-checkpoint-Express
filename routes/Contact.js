var express = require("express");
var router = express.Router();

router.get("/Contact", function (req, res, next) {
  res.send("Contact page");
});

module.exports = router;

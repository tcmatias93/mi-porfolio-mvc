const express = require("express");
const router = express.Router();
const path = require("path");

router.get("/", (req, res) => {
  let mainHtml = path.resolve(__dirname, "../views/home.html");
  res.sendFile(mainHtml);
});

module.exports = router;

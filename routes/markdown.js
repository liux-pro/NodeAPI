const express = require('express');
const markdownService = require("../service/markdownService");
const router = express.Router();


router.post('/convert', function(req, res, next) {
  let markdown = req.body["markdown"];
  console.log(markdown)
  res.json(markdownService.convert(markdown));
});
module.exports = router;

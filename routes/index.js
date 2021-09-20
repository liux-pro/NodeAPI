var express = require('express');
var router = express.Router();
var markdownService = require('../service/markdownService');

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

router.post('/markdownConvert', function(req, res, next) {
  let markdown = req.body["markdown"];
  console.log(markdown)
  res.json(markdownService.convert(markdown));
});

module.exports = router;

var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('crown_96/index', { id: '408628096', name: '黃楷鈞' });
});

module.exports = router;

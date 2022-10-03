var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

router.get('/', function(req, res, next) {
  res.render('sobre', { title: 'Express' });
});

router.get('/', function(req, res, next) {
  res.render('trabalheConosco', { title: 'Express' });
});

router.get('/', function(req, res, next) {
  res.render('contato', { title: 'Express' });
});

module.exports = router;

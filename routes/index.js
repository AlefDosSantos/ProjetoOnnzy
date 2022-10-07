var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

router.get('/sobre', function(req, res, next) {
  res.render('sobre', { title: 'Express' });
});

router.get('/trabalheConosco', function(req, res, next) {
  res.render('trabalheConosco', { title: 'Express' });
});

router.get('/contato', function(req, res, next) {
  res.render('contato', { title: 'Express' });
});


router.get('/Blog', function(req, res, next) {
  res.render('Blog', { title: 'Express' });
});



module.exports = router;


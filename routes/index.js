var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Home' });
});
/* GET other pages. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'About' });
});
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Products' });
});
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Service' });
});

module.exports = router;

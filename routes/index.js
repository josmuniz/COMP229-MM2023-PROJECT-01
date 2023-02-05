var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/home', function(req, res, next) {
  res.render('index', { title: 'Home' });
});
/* GET other pages. */
router.get('/aboutme', function(req, res, next) {
  res.render('index', { title: 'About Me' });
});
router.get('/projects', function(req, res, next) {
  res.render('index', { title: 'Projects' });
});
router.get('/services', function(req, res, next) {
  res.render('index', { title: 'Services' });
});
router.get('/contacts', function(req, res, next) {
  res.render('index', { title: 'Contact Me' });
});

module.exports = router;

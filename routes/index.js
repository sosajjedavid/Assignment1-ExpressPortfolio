var express = require('express');
var router = express.Router();

// GET DEFAULT PAGE
router.get('/', function(req, res, next) {
  res.render('home', { title: 'Home' });
});

// GET ABOUT.EJS PAGE
router.get('/about', function(req, res, next) {
  res.render('about', { title: 'About Me' });
});

// GET PROJECT.EJS PAGE
router.get('/project', function(req, res, next) {
  res.render('project', { title: 'Projects' });
});

// GET SERVICE PAGE
router.get('/service', function(req, res, next) {
  res.render('service', { title: 'Services' });
});

// GET CONTACT.EJS PAGE
router.get('/contact', function(req, res, next) {
  res.render('contact', { title: 'Contact Me' });
});

module.exports = router;

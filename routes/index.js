const express = require('express');
const router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: `You're welcome`, sayHello: 'Hello Buddy' });
});

router.get('/coucou-pug', function(req, res, next) {
  res.render('coucou', {sayHello: 'Hello Buddy' });
});

module.exports = router;

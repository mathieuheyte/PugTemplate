const express = require('express');
const bodyParser = require('body-parser');

const index = require('./routes/index');

const app = express();

// view engine setup
app.set('views', './views');
app.set('view engine', 'pug');

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(express.static('/public'));

app.use('/', index);

function errorHandler (err, req, res, next) {
  if (res.headersSent) {
    return next(err)
  }
  res.status(500)
  res.render('error', { error: err })
};

app.listen(3000, function () {
  console.log('Listening on port 3000!');
});

module.exports = app;

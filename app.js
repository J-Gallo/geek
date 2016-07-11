var express = require('express');
var path = require('path');
var favicon = require('serve-favicon');
var logger = require('morgan');
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');

var mongoose = require('mongoose');
var bannerModel = require('./models/banner');
var categoryModel = require('./models/category');
var productModel = require('./models/product');
var productListModel = require('./models/productList');

var routes = require('./routes/index');
var users = require('./routes/users');

var app = express();
var hbs = require('hbs');


app.set('x-powered-by', false);

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'hbs');

// uncomment after placing your favicon in /public
//app.use(favicon(path.join(__dirname, 'public', 'favicon.ico')));
app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(require('node-sass-middleware')({
  src: path.join(__dirname, 'src'),
  dest: path.join(__dirname, 'dist'),
  indentedSyntax: false,
  debug: true,
  sourceMap: true,
  prefix: '/dist',
  force: true
}));

app.use('/src', express.static(path.join(__dirname, 'src')));
app.use('/dist', express.static(path.join(__dirname, 'dist')));


app.use('/', routes);
app.use('/users', users);

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  var err = new Error('Not Found');
  err.status = 404;
  next(err);
});


//Partials
hbs.registerPartials(__dirname + '/views/modules/header');
hbs.registerPartials(__dirname + '/views/modules/footer');
hbs.registerPartials(__dirname + '/views/modules/carousel');
hbs.registerPartials(__dirname + '/views/modules/main_carousel');



// error handlers

// development error handler
// will print stacktrace
if (app.get('env') === 'development') {
  app.use(function(err, req, res, next) {
    res.status(err.status || 500);
    res.render('error', {
      message: err.message,
      error: err
    });
  });
  // app.use(errorhandler());
}

// production error handler
// no stacktraces leaked to user
app.use(function(err, req, res, next) {
  res.status(err.status || 500);
  res.render('error', {
    message: err.message,
    error: {}
  });
});


module.exports = app;

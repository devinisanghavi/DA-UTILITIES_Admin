var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
var expressLayout = require('express-ejs-layouts');

var indexRouter = require('./routes');
var user=require('./routes/user_routes');
var user1=require('./routes/user_routes1');
var batch=require('./routes/batch_routes');
var itemtype=require('./routes/itemtype_routes');
var venue=require('./routes/venue_routes');
var sell=require('./routes/sell_routes');
var session=require('./routes/session_routes');
var sessionreq=require('./routes/sessionrequest_routes');
var myproduct=require('./routes/sell_routes');

//var adminaccess=require

var app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));
global.uid="";
global.uname="Admin";
global.bcnt="";
global.scnt="";
global.secnt="";
global.vcnt="";
//app.use(expressLayout);

app.use('/', indexRouter);
app.use('/user',user);
app.use('/user1',user1);
app.use('/batch',batch);
app.use('/itemtype',itemtype);
app.use('/venue',venue);
app.use('/sell',sell);
app.use('/session',session);
app.use('/sessionreq',sessionreq);
app.use('/myproduct',myproduct);

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  next(createError(404));
});

// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

module.exports = app;

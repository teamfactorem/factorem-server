var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
var cors = require("cors");
var bodyParser = require('body-parser');
const mysql = require('mysql');

var indexRouter = require('./routes/index');
var dropFileRouter = require('./routes/dropFile');
var app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'jade');

app.use(logger('dev'));
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));
app.use(bodyParser.json()); // support json encoded bodies
app.use(bodyParser.urlencoded({ extended: true })); //

app.use('/', indexRouter);
app.use('/dropFile', dropFileRouter);

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  next(createError(404));
});

const db = mysql.createConnection ({
  host: 'localhost',
  user: 'root',
  password: '',
  database: 'factorem'
});

db.connect((err) => {
  if (err) {
    throw err;
  }
  console.log('Connected to database');
});

global.db = db;

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

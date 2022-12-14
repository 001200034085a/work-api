var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
const {errorHandle} = require('./midleware/errorMidleware');
const mongoose = require('mongoose');
const connectDB = require("./config/db");

var indexRouter = require('./routes/index');
var usersRouter = require('./routes/users');
const workRouter = require('./routes/work');
const projectRouter = require("./routes/project");
const memberRouter = require("./routes/member");
const commentRouter = require("./routes/comment");


var app = express();

// connect to database
connectDB();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));


app.use("/uploads", express.static('image'));

app.use('/', indexRouter);
app.use('/api/users', usersRouter);
app.use('/api/work', workRouter);
app.use('/api/project', projectRouter);
app.use("/api/member", memberRouter);
app.use("/api/comment", commentRouter);

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  next(createError(404));
});

// error handler
app.use(errorHandle);

module.exports = app;

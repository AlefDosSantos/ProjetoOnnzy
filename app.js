var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');

var indexRouter = require('./routes/index');
<<<<<<< HEAD
var usersRouter = require('./routes/index');
var sobreRouter = require('./routes/index');
var trabalheConoscoRouter = require('./routes/index')
var contatoRouter = require('./routes/index')
=======
var usersRouter = require('./routes/users');
var sobreRouter = require('./routes/sobre');
var trabalheConoscoRouter = require('./routes/trabalheConosco');
>>>>>>> 99db8b0797321e464d68fbd85776e2e883653e92

var app = express();



// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', indexRouter);
app.use('/users', usersRouter);
app.use('/sobre', sobreRouter);
<<<<<<< HEAD
=======


app.use('/', indexRouter);
app.use('/users', usersRouter);
>>>>>>> 99db8b0797321e464d68fbd85776e2e883653e92
app.use('/trabalheConosco', trabalheConoscoRouter);
app.use('/contato', contatoRouter);


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

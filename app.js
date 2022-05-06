require('dotenv').config();

const createError = require('http-errors');
const express = require('express');
const expressSession = require('express-session');
const MongoStore = require('connect-mongo');
const path = require('path');
const cookieParser = require('cookie-parser');
const logger = require('morgan');


const indexRouter = require('./routes/index');
const authRouter = require('./routes/authRoutes');
//Import routes for "catalog" area of site
const booksRouter = require('./routes/booksRoutes');
const authorsRouter = require('./routes/authorsRoutes');
const genresRouter = require('./routes/genresRoutes');
const bookinstancesRouter = require('./routes/bookinstancesRoutes');

const compression = require('compression');
const helmet = require('helmet');
const app = express();


//Set up mongoose connection
const mongoose = require('mongoose');
const { ppid } = require('process');
const { request } = require('http');
const mongoDB = `mongodb+srv://${process.env.MONGO_USER}:${process.env.MONGO_PASS}@cluster0.pcocp.mongodb.net/${process.env.MONGO_DATABASE}?retryWrites=true&w=majority`;
mongoose.connect(mongoDB, { useNewUrlParser: true, useUnifiedTopology: true });
const db = mongoose.connection;
db.on('error', console.error.bind(console, 'MongoDB connection error:'));



// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'jade');

app.use(helmet());
app.use(compression()); //Compress all routes
app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use(expressSession({
  store:MongoStore.create({
    mongoUrl: mongoDB,
    ttl: 2 * 60 * 60,
    autoRemove: 'native'
  }),
  secret: process.env.TOKEN_KEY,
  resave: false,
  saveUninitialized: false
}))

app.use((req, res, next) => {
  res.locals.session = req.session;
  next();
}
)

app.use('/', indexRouter);
app.use('/auth', authRouter);
app.use('/books',booksRouter);
app.use('/authors',authorsRouter);
app.use('/genres',genresRouter);
app.use('/bookinstances', bookinstancesRouter);

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

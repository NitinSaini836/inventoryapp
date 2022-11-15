var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
var db = require('./services/db')
var indexRouter = require('./routes/index');
var categoryRouter = require('./routes/category')
// var usersRouter = require('./routes/users')

var app = express();
const multer  = require('multer')
// const upload = multer({ dest: 'uploads/' })
const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, 'uploads/')
  },
  filename: function (req, file, cb) {
    const uniqueSuffix = Date.now() + '-' + Math.round(Math.random() * 1E9)
    cb(null, file.fieldname + '-' + uniqueSuffix)
  }
})
const upload = multer({ storage: storage })
db.connexion();
app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));
app.use(express.static("uploads"))
app.set('view engine', 'ejs')
app.use('/',upload.single('avatar'), indexRouter);
app.use('/update', indexRouter);
app.use('/',categoryRouter);
// app.use('/api/new',newRouter)
module.exports = app;

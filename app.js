let createError = require('http-errors');
let express = require('express');
let path = require('path');
let cookieParser = require('cookie-parser');
let logger = require('morgan');
const mongoose=require('mongoose');

let indexRouter = require('./routes/index');
let usersRouter = require('./routes/users');

// let indexRouter = require('.');


const app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');


app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', indexRouter);
app.use('/new', usersRouter);

// app.use('/new/submit',usersRouter )

// app.post('/new/submit', (req,res)=>{
//    res.redirect('/')
// })

// catch 404 and forward to error handler
app.use((req, res, next)=> {
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

//  THE APP WILL ONLY RUN IF THE DATABASE IS CONNECTED SUCCESSFULLY

const dbURL = 'mongodb://localhost:27017/MessageAPP'
mongoose.connect(dbURL)
   .then(()=>{
    console.log('Database connectes successfully')
    app.listen(8000)
   })
    .catch(err=> console.log(err))

 

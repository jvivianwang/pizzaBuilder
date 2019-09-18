require('dotenv').config({path: '.env'})

var express = require('express');
var app = express();
app.set('port', (process.env.PORT || 5000));

var mongoose = require("mongoose");
mongoose.Promise = global.Promise;

mongoose.connect('mongodb://localhost/user', { useNewUrlParser: true })
const db = mongoose.connection
db.on('error', (error) => console.error(error))
db.once('open', () => console.log('Connected to Database'))

app.use(express.json())

const userRouter = require('../routes/user')
app.use('/user', userRouter)
app.use(express.static(__dirname));

// views is directory for all template files
app.set('views', __dirname + '/html');
app.set('view engine', 'ejs');

var User = require('../models/user');

// Set up the app's routing
app.get('/', function(request, response) {
  response.render('pages/index');
});

app.listen(app.get('port'), function() {
  console.log('Node app is running on port', app.get('port'));
});

// This file is what handles incoming requests and
// serves files to the browser, or executes server-side code

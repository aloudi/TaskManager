// Base setup
const express = require('express');
const bodyParser = require('body-parser');
const morgan = require('morgan');
const mongoose = require('mongoose');

// App dependencies
const loginRouter = require('./app/router/login');
const tasksRouter = require('./app/router/tasks');
const usersRouter = require('./app/router/users');

// Create our express app
const app = express();

// Set our port
const port = process.env.PORT || 8082;

// Use native mongoose promises
mongoose.Promise = global.Promise;

// Connect to our database
mongoose.connect('mongodb://localhost:27017/MeanStackApp_Task_Manager');

// Configure logger - log requests to the console
app.use(morgan('dev'));

// Configure body parser
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

// Enable CORS
app.use((req, res, next) => {
  res.header('Access-Control-Allow-Origin', '*');
  res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept, Authorization');
  res.header('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE');
  next();
});

// Register our routes
app.use('/api/login', loginRouter);
app.use('/api/users', usersRouter);
app.use('/api/users/tasks', tasksRouter);

// Start the server
app.listen(port);
console.log(`Magic happens on port ${port}`);

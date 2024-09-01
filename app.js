// import the express module
const express = require('express');
const mentorRouter = require('./routes/mentorRoutes');
const studentRouter = require('./routes/studentRoutes');

// create an express application
const app = express();

// use the express middleware to parse JSON bodies
app.use(express.json());

app.use('/mentors', mentorRouter);
app.use('/students', studentRouter);

// export the express application
module.exports = app;
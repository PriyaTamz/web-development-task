const express = require('express');
const mentorRouter = require('./routes/mentorRoutes');
const studentRouter = require('./routes/studentRoutes');

const app = express();

app.use(express.json());

app.use('/mentors', mentorRouter);
app.use('/students', studentRouter);

module.exports = app;
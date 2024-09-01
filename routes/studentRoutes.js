const express = require('express');
const studentController = require('../controllers/studentController');

const studentRouter = express.Router();

// define the endpoints for the jobRouter
studentRouter.get('/', studentController.getStudents);
studentRouter.post('/', studentController.createStudent);

module.exports = studentRouter;
const express = require('express');
const studentController = require('../controllers/studentController');

const studentRouter = express.Router();

studentRouter.get('/', studentController.getStudents);
studentRouter.get('/mentors/:mentorId', studentController.getStudentById);
studentRouter.post('/', studentController.createStudent);
studentRouter.post('/mentors/:mentorId', studentController.createStudentById);
studentRouter.get('/list', studentController.listStudents);
studentRouter.get('/:students/previousMentors', studentController.getPreviousMentorForStudent);


module.exports = studentRouter;
const express = require('express');
const mentorController = require('../controllers/mentorController');

const mentorRouter = express.Router();

mentorRouter.get('/', mentorController.getMentors);
mentorRouter.post('/', mentorController.createMentor);
mentorRouter.post('/students/:students', mentorController.assignMentor);
mentorRouter.get('/:mentorId/students', mentorController.getStudentsByMentorId);

module.exports = mentorRouter;

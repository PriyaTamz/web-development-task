// import the express
const express = require('express');
const mentorController = require('../controllers/mentorController');

// create a router
const mentorRouter = express.Router();

// define the endpoints
mentorRouter.get('/', mentorController.getMentors);
mentorRouter.post('/', mentorController.createMentor);

// export the router
module.exports = mentorRouter;
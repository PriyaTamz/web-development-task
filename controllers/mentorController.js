// import the Company model
const Mentor = require('../models/mentor');

// create the company controller
const mentorController = {
    getMentors: async (req, res) => {
        try {
            const mentors = await Mentor.find();

            res.status(200).json(mentors);
        } catch (error) {
            res.status(500).json({ message: error.message });
        }
    },
    createMentor: async (req, res) => {
        try {
            const mentor = req.body;
            const savedMentor = await Mentor.insertMany(mentor);
            res.status(201).json({message: "Mentor created successfully", mentor: savedMentor});
        } catch (error) {
            res.status(500).json({message: error.message});
        }
    }
}

// export the company controller
module.exports = mentorController;
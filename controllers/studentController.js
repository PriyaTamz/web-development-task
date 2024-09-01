const Mentor = require('../models/mentor');
const Student = require('../models/student');

const studentController = {
    getStudents: async (req, res) => {
        try {
            const students = await Student.find();

            res.status(200).json(students);
        } catch (error) {
            res.status(500).json({ message: error.message });
        }
    },
    createStudent: async (req, res) => {
        try {
            const students = req.body;
            const savedStudents = await Student.insertMany(students);
            res.status(201).json({message: "Student created successfully", students: savedStudents});
        } catch (error) {
            res.status(500).json({message: error.message});
        }
    }
}

module.exports = studentController;
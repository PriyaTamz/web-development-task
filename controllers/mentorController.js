const Mentor = require('../models/mentor');
const Student = require('../models/student');

const mentorController = {
    getMentors: async (req, res) => {
        try {
            const mentors = await Mentor.find();
            res.status(200).json(mentors);
        } catch (error) {
            res.status(500).json({ message: error.message });
        }
    },
    // 1: create mentor
    createMentor: async (req, res) => {
        try {
            const mentorsArray = req.body;
            if (!Array.isArray(mentorsArray)) {
                return res.status(400).json({ message: "Input should be an array of mentors" });
            }
            const savedMentor = await Mentor.insertMany(mentorsArray);
            res.status(201).json({ message: "Mentor created successfully", mentor: savedMentor });
        } catch (error) {
            res.status(500).json({ message: error.message });
        }
    },
    // 4: select one student and assign one mentor
    assignMentor: async (req, res) => {
        try {
            const { students } = req.params;
            let unassignedMentor = await Mentor.findOne({ students: { $size: 0 } });
            if (!unassignedMentor) {
                return res.status(404).json({ message: 'No unassigned mentor available' });
            }
            const studentToUpdate = await Student.findById(students);
            if (!studentToUpdate) {
                return res.status(404).json({ message: 'Student not found' });
            }
            if (studentToUpdate.mentorId) {
                studentToUpdate.previousMentors.push(studentToUpdate.mentorId);
            }
            studentToUpdate.mentorId = unassignedMentor._id;
            await studentToUpdate.save();
            unassignedMentor.students.push(students);
            const savedMentor = await unassignedMentor.save();
            res.status(201).json({
                message: 'Student assigned to mentor successfully',
                mentor: savedMentor,
                student: studentToUpdate
            });
        } catch (error) {
            res.status(500).json({ message: error.message });
        }
    },
    // 5: list all students for particular mentor
    getStudentsByMentorId: async (req, res) => {
        try {
            const { mentorId } = req.params;
            const students = await Student.find({ mentorId: mentorId });
            if (students.length === 0) {
                return res.status(404).json({ message: 'No students found for this mentor' });
            }
            res.status(200).json({ students });
        } catch (error) {
            res.status(500).json({ message: error.message });
        }
    }
};

module.exports = mentorController;
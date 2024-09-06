const Student = require('../models/student');
const Mentor = require('../models/mentor');

const studentController = {
    getStudents: async (req, res) => {
        try {
            const students = await Student.find();
            res.status(200).json(students);
        } catch (error) {
            res.status(500).json({ message: error.message });
        }
    },
    getStudentById: async (req, res) => {
        try {
            const { mentorId } = req.params;
            const students = await Student.find({ mentorId }); 
            res.status(200).json(students);
        } catch (error) {
            res.status(500).json({ message: error.message });
        }
    },
    // 2: create student
    createStudent: async (req, res) => {
        try {
            const studentsArray = req.body;
            if (!Array.isArray(studentsArray)) {
                return res.status(400).json({ message: "Input should be an array of students" });
            }
            const savedStudents = await Student.insertMany(studentsArray);

            res.status(201).json({
                message: "Students created successfully",
                students: savedStudents,
            });
        } catch (error) {
            res.status(500).json({ message: error.message });
        }
    },
    // 3.1: select one mentor and add multiple student
    createStudentById: async (req, res) => {
        try {
            const { mentorId } = req.params;
            const studentsArray = req.body;
            if (!Array.isArray(studentsArray)) {
                return res.status(400).json({ message: "Input should be an array of students" });
            }
            const studentsWithMentorId = studentsArray.map(student => ({
                ...student,
                mentorId,
            }));
            const savedStudents = await Student.insertMany(studentsWithMentorId);
            const mentorToUpdate = await Mentor.findById(mentorId);
            if (mentorToUpdate) {
                const studentIds = savedStudents.map(student => student._id);
                mentorToUpdate.students.push(...studentIds);
                await mentorToUpdate.save();
            }
            res.status(201).json({
                message: "Students created successfully",
                students: savedStudents,
            });
        } catch (error) {
            res.status(500).json({ message: error.message });
        }
    },
    // 3.2: list student who doesnt have mentor
    listStudents: async (req, res) => {
        try {
            const studentsWithputMentor = await Student.find({ mentorId: { $exists: false } });
            res.status(201).json({
                message: "Students created successfully",
                students: studentsWithputMentor,
            });

        } catch (error) {
            res.status(500).json({ message: error.message });
        }
    },
    // 6: Retrieving previously assigned mentors for a particular student
    getPreviousMentorForStudent: async (req, res) => {
        try {
            const { students } = req.params;
            const student = await Student.findById(students).populate('previousMentors');

            if (!student) {
                return res.status(404).json({ message: 'Student not found' });
            }

            res.status(200).json({ previousMentors: student.previousMentors });
        } catch (error) {
            res.status(500).json({ message: error.message });
        }
    }
};

module.exports = studentController;




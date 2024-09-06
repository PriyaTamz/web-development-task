const { default: mongoose } = require("mongoose");

const MentorSchema = new mongoose.Schema({
    name: String,
    email: String,
    expertise: String,
    years_of_experience: Number,
    students: [
        {
            type: mongoose.Schema.Types.ObjectId,
            ref: 'Student'
        }
    ],
    createdAt: {
        type: Date,
        default: Date.now
    },
    updatedAt: {
        type: Date,
        default: Date.now
    },
})

module.exports = mongoose.model('Mentor', MentorSchema, 'mentors');
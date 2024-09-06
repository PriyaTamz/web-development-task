const mongoose = require('mongoose');

const StudentSchema = new mongoose.Schema({
    name: String,
    email: String,
    major: String,
    year_of_study: Number,
    mentorId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Mentor'
    },
    previousMentors: [
        {
            type: mongoose.Schema.Types.ObjectId,
            ref: 'Mentor'
        }
    ],
    createdAt: {
        type: Date,
        default: Date.now
    },
    updatedAt: {
        type: Date,
        default: Date.now
    }
});

module.exports = mongoose.model('Student', StudentSchema, 'students');

const { default: mongoose } = require("mongoose");

const StudentSchema = new mongoose.Schema({
    name: String,
    email: String,
    major: String,
    year_of_study: Number,
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
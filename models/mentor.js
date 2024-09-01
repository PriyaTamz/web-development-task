const { default: mongoose } = require("mongoose");

// create a schema
const MentorSchema = new mongoose.Schema({
    name: String,
    email: String,
    expertise: String,
    years_of_experience: Number,
    createdAt: {
        type: Date,
        default: Date.now
    },
    updatedAt: {
        type: Date,
        default: Date.now
    }
})

// create a model and export it
module.exports = mongoose.model('Mentor', MentorSchema, 'mentors');
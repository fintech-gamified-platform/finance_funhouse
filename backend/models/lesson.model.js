const mongoose = require('mongoose');

const LessonSchema = new mongoose.Schema({
    title: { type: String, required: true },
    content: { type: String, required: true },
    quizzes: [{
        question: { type: String, required: true },
        options: [{ type: String, required: true }],
        correctAnswer: { type: String, required: true }
    }],
    difficulty: { type: String, required: true }  // e.g., beginner, intermediate, advanced
});

module.exports = mongoose.model('Lesson', LessonSchema);

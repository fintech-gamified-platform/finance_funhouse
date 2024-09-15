const express = require('express');
const Lesson = require('../models/lesson.model');

const router = express.Router();

// Get all lessons
router.get('/', async (req, res) => {
    const lessons = await Lesson.find();
    res.status(200).json(lessons);
});

// Save lesson progress (you can update this later to track user progress)
router.post('/progress', async (req, res) => {
    const { userId, lessonsCompleted } = req.body;
    // Logic to update user progress
    res.send('Progress updated');
});

module.exports = router;

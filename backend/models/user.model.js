const mongoose = require('mongoose');

const UserSchema = new mongoose.Schema({
    username: { type: String, required: true, unique: true },
    password: { type: String, required: true },
    email: { type: String, required: true },
    progress: {
        lessonsCompleted: { type: Number, default: 0 },
        dailyStreak: { type: Number, default: 0 },
        rewards: [{ type: String }]
    }
});

module.exports = mongoose.model('User', UserSchema);

const mongoose = require('mongoose');
const { passwordValidation } = require('../utilities/passwordValidation');

const userSchema = new Schema({
    name: {
        type: String,
        required: true,
        unique: true,
        trim: true,
        minLength: 2
    },
    position: {
        type: String,
        enum: ['student', 'developer']
    },
    password: {
        type: String,
        validator: passwordValidation(),
        trim: true,
        minLength: 8
    },
    skills: {
        type: String,
        required: true
    }
});

module.exports = mongoose.model("User", userSchema);
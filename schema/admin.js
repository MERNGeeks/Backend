const mongoose = require('mongoose');
const { passwordValidation } = require('../utilities/passwordValidation');

const adminSchema = new Schema({
    name: {
        type: String,
        required: true,
        unique: true,
        trim: true,
        minLength: 2
    },
    password: {
        type: String,
        validator: passwordValidation(),
        trim: true,
        minLength: 8
    }
});

module.exports = mongoose.model("Admin", adminSchema);
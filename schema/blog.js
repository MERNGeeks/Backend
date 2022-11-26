const mongoose = require('mongoose');

const blogSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true,
        index: {unique: true}
    },
    content: {
        type: String,
        required: true
    },
    hashtags: {
        type: String,
        required: true
    },
    createdDate: {
        type: Date,
        default: Date.now
    },
    role: {
        type: String,
        default: "user"
    }
});

module.exports = mongoose.model("Blog", blogSchema);
const mongoose = require('mongoose');

const blogSchema = new Schema({
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
    }
});

module.exports = mongoose.model("Blog", blogSchema);
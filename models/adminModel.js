const logger = require('winston');
const Blog = require('../schema/blog');

const CLASS_NAME = 'adminModel';

async function getAllBlogsFromStorage() {
    try {
        let response = await Blog.find().exec();

        return response;
    }
    catch(error) {
        logger.error(`${CLASS_NAME} getAllBlogsFromStorage error`, error);
    }
}

module.exports = {
    getAllBlogsFromStorage
}
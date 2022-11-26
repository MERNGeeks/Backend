const logger = require('winston');
const Blog = require('../schema/blog');
const User = require('../schema/user');

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

async function getAllUsersFromStorage() {
    try {
        let response = await User.find().exec();

        return response;
    }
    catch(error) {
        logger.error(`${CLASS_NAME} getAllUsersFromStorage error`, error);
    }
}

module.exports = {
    getAllBlogsFromStorage,
    getAllUsersFromStorage
}
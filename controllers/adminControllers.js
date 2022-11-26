const logger = require('winston');
const { getAllBlogsFromStorage } = require('../models/adminModel');

const CLASS_NAME = 'adminControllers';

module.exports.getAllBlogsForAdmin = async (req, res) => {
    try {
        let response = await getAllBlogsFromStorage();
        if(response) {
            res.status(200).json({
                response: response
            })
        } else {
            res.status(204).json({
                response: null
            })
        }
    }
    catch(error) {
        logger.error(`${CLASS_NAME} getAllBlogsForAdmin error`, error)
    }
}
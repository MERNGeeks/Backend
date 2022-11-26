const express = require('express');
const router = express.Router();
const ADMIN_API = require('../controllers/adminControllers');

router.get('/admin/get-all-blogs', ADMIN_API.getAllBlogsForAdmin);

router.get('/admin/get-all-users', ADMIN_API.getAllUsersForAdmin);

module.exports = router;
const express = require('express');
const router = express.Router();
const blogRoutes = require('../controllers/blogControllers');

router.get('/', blogRoutes);
require('dotenv').config();
const express = require('express');
const winston = require('winston');
const { mongooseDBHandler } = require('./services/mongooseDBHanlder');

const adminRoutes = require('./routes/adminRoutes');
const userRoutes = require('./routes/userRoutes');
const blogRoutes = require('./routes/blogRoutes');

// Initialized logger
const { initializeLogger } = require('./utilities/logger');
const logger = initializeLogger();

logger.add(
    new winston.transports.Console({
        format: winston.format.simple()
    })
);

const app = express();

app.use(express.urlencoded({extended: true}));
app.use(express.json());
app.use(express.static('public'));

app.use(adminRoutes);
app.use(userRoutes);
app.use(blogRoutes);

mongooseDBHandler().on('error', error => logger.error(`Error occured while connecting`, error));
mongooseDBHandler().once("connected", connected => logger.info(`Successfully connected to database!`));

const port = process.env.port || process.env.PORT || 5500;

app.listen(port, () => {
    logger.info(`Server is listening to port: ${port}`);
});
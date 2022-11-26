require('dotenv').config();
const express = require('express');
const winston = require('winston');
const { mongooseDBHandler } = require('./services/mongooseDBHanlder');

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
app.use(express.static('public'));

mongooseDBHandler().on('error', error => logger.error(`Error occured while connecting`, error));
mongooseDBHandler().once("connected", connected => logger.info(`Successfully connected to database!`));

const port = process.env.port || process.env.PORT || 5500;

app.listen(port, () => {
    console.log(`Server is listening to port: ${port}`);
});
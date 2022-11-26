const mongoose = require('mongoose');

module.exports.mongooseDBHandler = () => {
    mongoose.connect(
        process.env.MONGODB_ATLAS_URI, {
        useNewUrlParser: true,
        useUnifiedTopology: true
    });

    let mongooseConnection = mongoose.connection;

    return mongooseConnection;
}
const config = require('../config/env');
const mongoose = require('mongoose');

function connect() {
    mongoose.connect(config.MONGODB_URI)
        .then(() => {
            console.log('Connected to the database');
        })
        .catch((error) => {
            console.error('Error connecting to the database: ', error.message);
        });
}

module.exports = {
    connect
};
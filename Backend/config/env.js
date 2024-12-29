require('dotenv').config();

const env = {
    PORT: process.env.PORT || 8000,
    ENVIRONMENT: process.env.NODE_ENV || 'development',
    MONGODB_URI: process.env.MONGODB_URI,
    JWT_SECRET: process.env.JWT_SECRET
}

module.exports = env;
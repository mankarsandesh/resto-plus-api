// For the development environment

require('dotenv').config();

const config = {
    db: {
        host: process.env.DB_HOSTNAME || 'localhost',
        name: process.env.DB_NAME || 'resto',
        username: process.env.DB_USERNAME || 'root',
        password: process.env.DB_PASSWORD || '',
        timezone: process.env.DB_PASSWORD || '+07:00'
    },
    app: {
        port: process.env.PORT || 5006
    }
}

module.exports = config;
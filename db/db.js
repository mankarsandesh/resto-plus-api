const Sequelize = require('sequelize');
const config = require('../config/config.global');

// Initialize db connection
const sequelize = new Sequelize(config.db.name, config.db.username, config.db.password, {
    host: config.db.host,
    dialect: 'mysql',
    logging: false,
    dialectOptions: {
        // useUTC: false,
        dateStrings: true,
        typeCast: function (field, next) {
            // For reading from database
            if (field.type === 'DATETIME') {
                return field.string();
            }
            return next();
        }
    },
    timezone: config.db.timezone
});

// Check if the database is connected successfully
sequelize.authenticate()
    .then(() => {
        console.log('Connection established successfully');
    })
    .catch((error) => {
        console.log(error);
});

// Create db table if it does not exist
sequelize.sync();

module.exports = sequelize;



// Require the constants file according to the node environment 
const config = require(`./config.${process.env.NODE_ENV}`); 

module.exports = config;
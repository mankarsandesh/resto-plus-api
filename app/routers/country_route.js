const express = require('express');
const countryRouter = express.Router();
const countryController = require('../controller/country_controller');


// fetch all City
countryRouter.get('/country', countryController.getAllCountry );

module.exports = countryRouter;
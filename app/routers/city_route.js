const express = require('express');
const cityRouter = express.Router();
const currencyController = require('../controller/city_controller');


// fetch all City
cityRouter.get('/city', currencyController.getAllCity );

module.exports = cityRouter;
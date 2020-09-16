const express = require('express');
const cityRouter = express.Router();
const currencyController = require('../controller/city_controller');
const {successResponse, serverError} = require('../utils/utils');


// fetch all currency
cityRouter.get('/city', currencyController.getAllCity );

module.exports = cityRouter;
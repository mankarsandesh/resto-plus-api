const express = require('express');
const currencyRouter = express.Router();
const currencyController = require('../controller/currency_controller');


// fetch all City
currencyRouter.get('/currency', currencyController.getAllCurrency );

module.exports = currencyRouter;
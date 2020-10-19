const express = require('express');
const currencyRouter = express.Router();
const currencyController = require('../controller/currency_controller');


// fetch all Cuyrrenc
currencyRouter.get('/currency', currencyController.getAllCurrency );

//  add new Currency
currencyRouter.post('/currency', currencyController.currencyStore);

// Delete Currency
currencyRouter.delete('/currency' , currencyController.currencyDelete);

module.exports = currencyRouter;
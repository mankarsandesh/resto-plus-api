const express = require('express');
const cityRouter = express.Router();
const cityController = require('../controller/city_controller');


// fetch all City
cityRouter.get('/city', cityController.getAllCity );



cityRouter.post('/city', cityController.cityStore);



module.exports = cityRouter;
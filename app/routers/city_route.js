const express = require('express')
const cityRouter = express.Router()
const cityController = require('../controller/city_controller')
const authJwt = require('../middleware/validators/authJwt')

// fetch all City
cityRouter.get('/city', authJwt.verifyToken, cityController.getAllCity)

// Add New City
cityRouter.post('/city', authJwt.verifyToken, cityController.cityStore)

// Delete City
cityRouter.delete('/city', authJwt.verifyToken, cityController.cityDelete)

// Edit City
cityRouter.put('/city', authJwt.verifyToken, cityController.cityEdit)

module.exports = cityRouter

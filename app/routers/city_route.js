const express = require('express')
const cityRouter = express.Router()
const cityController = require('../controller/city_controller')

// fetch all City
cityRouter.get('/city', cityController.getAllCity)

// Add New City
cityRouter.post('/city', cityController.cityStore)

// Delete City
cityRouter.delete('/city', cityController.cityDelete)

// Edit City
cityRouter.put('/city', cityController.cityEdit)

module.exports = cityRouter

const express = require('express')
const countryRouter = express.Router()
const countryController = require('../controller/country_controller')

// Fetch all Country
countryRouter.get('/country', countryController.getAllCountry)

// Add New Country
countryRouter.post('/country', countryController.countryStore)

// Delete Country
countryRouter.delete('/country', countryController.countryDelete)

// Edit Country
countryRouter.put('/country', countryController.countryEdit)

module.exports = countryRouter

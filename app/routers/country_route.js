const express = require('express')
const countryRouter = express.Router()
const countryController = require('../controller/country_controller')
const authJwt = require('../middleware/validators/authJwt')

// Fetch all Country
countryRouter.get(
	'/country',
	authJwt.verifyToken,
	countryController.getAllCountry
)

// Add New Country
countryRouter.post(
	'/country',
	authJwt.verifyToken,
	countryController.countryStore
)

// Delete Country
countryRouter.delete(
	'/country',
	authJwt.verifyToken,
	countryController.countryDelete
)

// Edit Country
countryRouter.put(
	'/country',
	authJwt.verifyToken,
	countryController.countryEdit
)

module.exports = countryRouter

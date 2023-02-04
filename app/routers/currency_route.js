const express = require('express')
const currencyRouter = express.Router()
const currencyController = require('../controller/currency_controller')
const authJwt = require('../middleware/validators/authJwt')

// fetch all Cuyrrenc
currencyRouter.get(
	'/currency',
	authJwt.verifyToken,
	currencyController.getAllCurrency
)

//  add new Currency
currencyRouter.post(
	'/currency',
	authJwt.verifyToken,
	currencyController.currencyStore
)

// Delete Currency
currencyRouter.delete(
	'/currency',
	authJwt.verifyToken,
	currencyController.currencyDelete
)

// Edit Currency
currencyRouter.put(
	'/currency',
	authJwt.verifyToken,
	currencyController.currencyEdit
)

module.exports = currencyRouter

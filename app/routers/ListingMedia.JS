const express = require('express')
const usersRouter = express.Router()
const userController = require('../controller/users_controller')
const authJwt = require('../middleware/validators/authJwt')

// fetch all currency
usersRouter.get(
	'/listingMedia',
	authJwt.verifyToken,
	userController.getAllUsers
)

module.exports = usersRouter

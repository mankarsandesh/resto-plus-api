const express = require('express')
const usersRouter = express.Router()
const userController = require('../controller/users_controller')
// validation
const {
	validateUsers,
	validateAuthUser,
} = require('../middleware/validators/users')
const validate = require('../middleware/validators/validate')

// Login  Users
usersRouter.post(
	'/auth/users',
	validateAuthUser(),
	validate,
	userController.AuthUsers
)

// fetch all Users
usersRouter.get('/users', userController.getAllUsers)

// Create new Users
usersRouter.post('/users', validateUsers(), validate, userController.usersStore)

// Update  User
usersRouter.put('/users', validateUsers(), validate, userController.userEdit)

// Delete Users
usersRouter.delete('/users', userController.usersDelete)

module.exports = usersRouter

const express = require('express')
const usersRouter = express.Router()
const userController = require('../controller/users_controller')
// validation
const { validateUsers } = require('../middleware/validators/users')
const validate = require('../middleware/validators/validate')
const authJwt = require('../middleware/validators/authJwt')

// Teste Routes
// usersRouter.get('/test', 'Hello')
usersRouter.get('/test', (req, res) => {
	res.send('Testing123')
})
// Login  Users
usersRouter.post('/auth/users', validate, userController.AuthUsers)

// fetch all Users
usersRouter.get('/users', authJwt.verifyToken, userController.getAllUsers)

// Create new Users
usersRouter.post('/users', validateUsers(), validate, userController.usersStore)

// Update  User
usersRouter.put(
	'/users',
	authJwt.verifyToken,
	validateUsers(),
	validate,
	userController.userEdit
)

// Delete Users
usersRouter.delete('/users', authJwt.verifyToken, userController.usersDelete)

module.exports = usersRouter

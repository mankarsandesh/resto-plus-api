const {
	allUsers,
	storeUsers,
	deleteUser,
	editUser,
	findUser,
	findUserData,
} = require('../components/models/users.interface')
const {
	successResponse,
	serverError,
	notFoundError,
} = require('../utils/utils')
const bcrypt = require('bcrypt')
const jwt = require('jsonwebtoken')

// Store users Information
const AuthUsers = async (req, res) => {
	try {
		var usersData = {
			userEmail: req.body.userEmail,
			password: req.body.password,
		}
		const userData = await findUserData(usersData)
		if (!(await bcrypt.compare(usersData.password, userData.password))) {
			return res
				.status(401)
				.send(notFoundError('Your Email and Password is InCorrect'))
		} else {
			const token = jwt.sign(
				{ user: userData.userEmail },
				process.env.JWT_SECRET_KEY,
				{
					expiresIn: process.env.JWT_EXPIRES_IN,
				}
			)
			const cookieOptions = {
				expires: new Date(
					Date.now() + process.env.JWT_COOKIE_EXPIRES * 24 * 60 * 60 * 1000
				),
				httpOnly: true,
			}
			res.cookie('joes', token, cookieOptions)
			return res.send(successResponse(userData))
		}
	} catch (error) {
		console.log(error)
		res.status(500).send(serverError())
	}
}

// fetch all get All users
const getAllUsers = async (req, res) => {
	try {
		const user = await allUsers()
		return res.send(successResponse(user))
	} catch (error) {
		console.log(error)
		res.status(500).send(serverError())
	}
}

// Store users Information
const usersStore = async (req, res) => {
	try {
		// const userBody = req.body
		const salt = await bcrypt.genSalt(10)
		var usersData = {
			userName: req.body.userName,
			userEmail: req.body.userEmail,
			status: req.body.status,
			password: await bcrypt.hash(req.body.password, salt),
		}
		const count = await findUser(usersData)
		console.log(count, 'count')
		if (count) {
			return res.status(404).send(notFoundError('Email Id Already Exits'))
		} else {
			const users = await storeUsers(usersData)
			if (users.error) {
				return res.status(400).send(badRequestError(users.error))
			}
			return res.send(successResponse(users))
		}
	} catch (error) {
		console.log(error)
		res.status(500).send(serverError())
	}
}

// Delete Users
const usersDelete = async (req, res) => {
	try {
		const userID = req.body.userID
		const user = await deleteUser(userID)
		if (user.error) {
			return res.status(400).send(badRequestError(user.error))
		}
		return res.send(successResponse(user))
	} catch (error) {
		console.log(error)
		res.status(500).send(serverError())
	}
}
// Edit City
const userEdit = async (req, res) => {
	try {
		const userBody = req.body
		const user = await editUser(userBody)
		if (user.error) {
			return res.status(400).send(badRequestError(user.error))
		}
		return res.send(successResponse(user))
	} catch (error) {
		console.log(error)
		res.status(500).send(serverError())
	}
}
module.exports = {
	AuthUsers,
	getAllUsers,
	usersStore,
	usersDelete,
	userEdit,
}

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
const { promisify } = require('util')
const console = require('console')
// Users Login
const AuthUsers = async (req, res) => {
	try {
		var usersData = {
			userEmail: req.body.userEmail,
			password: req.body.password,
		}
		const userData = await findUserData(usersData)
		console.log(userData, 'userData')
		if (!userData) {
			return res
				.status(401)
				.send(notFoundError('Your Email and Password is InCorrect'))
		} else if (!(await bcrypt.compare(usersData.password, userData.password))) {
			return res
				.status(401)
				.send(notFoundError('Your Email and Password is InCorrect'))
		} else {
			const token = jwt.sign(
				{ user: userData.userEmail },
				process.env.JWT_SECRET_KEY
			)
			return res.send(
				successResponse({
					id: userData.userID,
					userName: userData.userName,
					userEmail: userData.userEmail,
					userType: userData.userType,
					access_token: token,
				})
			)
		}
	} catch (error) {
		console.log(error)
		res.status(500).send(serverError())
	}
}

// fetch all get All users
const getAllUsers = async (req, res) => {
	console.log(req.query, 'sasa')
	try {
		const user = await allUsers()
		const data = {
			page: Number(req.query.page),
			per_page: Number(req.query.per_page),
			total: user.length,
			total_pages: Math.ceil(user.length / 10),
			data: user,
		}
		return res.send(successResponse(data))
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

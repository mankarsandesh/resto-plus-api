const {
	allUsers,
	storeUsers,
	deleteUser,
	editUser,
} = require('../components/models/users.interface')
const { successResponse, serverError } = require('../utils/utils')

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
		const userBody = req.body
		const users = await storeUsers(userBody)
		if (users.error) {
			return res.status(400).send(badRequestError(users.error))
		}
		return res.send(successResponse(users))
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
	getAllUsers,
	usersStore,
	usersDelete,
	userEdit,
}

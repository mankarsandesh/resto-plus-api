const usersModel = require('../../models/users')
// Find all Users
const allUsers = async () => {
	let limit = 10
	let offset = 0 + (req.body.page - 1) * limit
	try {
		const user = await usersModel.findAndCountAll({
			offset: offset,
			limit: limit,
			order: [['date', 'ASC']],
			raw: true,
		})
		return user
	} catch (error) {
		console.log(error)
		throw new Error()
	}
}
// Add New user
const storeUsers = async (data, res) => {
	try {
		const users = await usersModel.create(data, { raw: true })
		return users
	} catch (error) {
		console.log(error)
	}
}
// Delete Uers
const deleteUser = async (userID, res) => {
	try {
		const deleted = await usersModel.destroy({ where: { userID: userID } })
		if (deleted == 1) {
			// If the category is deleted
			return 'Sucessfully Users Deleted'
		} else {
			return 'userID not found'
		}
	} catch (error) {
		console.log(error)
		throw new Error(error.message)
	}
}
// Edit Users
const editUser = async (data, res) => {
	try {
		const userCheck = await usersModel.findOne({
			where: { userID: data.userID },
		})
		if (!userCheck) {
			return 'userID not found'
		}
		// If the City is deleted
		const updated = await usersModel.update(data, {
			where: { userID: data.userID },
		})
		return 'Sucessfully Users Updated'
	} catch (error) {
		console.log(error)
		throw new Error(error.message)
	}
}
// Find User
const findUser = async (data, res) => {
	try {
		const count = await usersModel.findOne({
			where: { userEmail: data.userEmail },
		})
		if (count === null) {
			return false
		}
		return true
	} catch (error) {
		throw new Error(error.message)
	}
}
// Find User Data
const findUserData = async (data, res) => {
	try {
		const count = await usersModel.scope('withPassword').findOne({
			where: { userEmail: data.userEmail },
		})

		if (count === null) {
			return false
		}
		return count
	} catch (error) {
		throw new Error(error.message)
	}
}

module.exports = {
	allUsers,
	storeUsers,
	deleteUser,
	editUser,
	findUser,
	findUserData,
}

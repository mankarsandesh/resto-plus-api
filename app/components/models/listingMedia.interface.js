const mediaModel = require('../../models/media')

// upload media in listing
const storeMedia = async (data, res) => {
	try {
		const response = await mediaModel.create(data, { raw: true })
		return response
	} catch (error) {
		console.log(error)
	}
}

// Find all Users
const allMedia = async () => {
	try {
		const user = await mediaModel.findAll({ raw: true })
		return user
	} catch (error) {
		console.log(error)
		throw new Error()
	}
}

// Delete media
const deleteMedia = async (userID, res) => {
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

module.exports = {
	storeMedia,
	allMedia,
	deleteMedia,
}

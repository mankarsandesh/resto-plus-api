const {
	storeMedia,
	deleteMedia,
	allMedia,
} = require('../components/models/listingMedia.interface')
const { successResponse, serverError } = require('../utils/utils')

// fetch all currency
const getAllListingMedia = async (req, res) => {
	try {
		const user = await allMedia()
		return res.send(successResponse(user))
	} catch (error) {
		console.log(error)
		res.status(500).send(serverError())
	}
}
const uploadListingMedia = async (req, res) => {
	try {
		const user = await storeMedia()
		return res.send(successResponse(user))
	} catch (error) {
		console.log(error)
		res.status(500).send(serverError())
	}
}

// Delete media
const mediaDelete = async (req, res) => {
	try {
		const userID = req.body.userID
		const user = await deleteMedia(userID)
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
	getAllListingMedia,
	uploadListingMedia,
	mediaDelete,
}

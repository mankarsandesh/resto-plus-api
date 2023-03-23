const { storeMedia } = require('../components/models/listingMedia.interface')
const { successResponse, serverError } = require('../utils/utils')

// fetch all currency
const getAllListingMedia = async (req, res) => {
	try {
		const user = await storeMedia()
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
module.exports = {
	getAllListingMedia,
	uploadListingMedia,
}

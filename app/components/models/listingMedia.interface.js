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

module.exports = {
	storeMedia,
}

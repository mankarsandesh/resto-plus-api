const express = require('express')
const mediaRouter = express.Router()
const mediaController = require('../controller/listingMedia_controller')
// validation
const { validateUsers } = require('../middleware/validators/users')
const validate = require('../middleware/validators/validate')
const authJwt = require('../middleware/validators/authJwt')

// fetch all media
mediaRouter.get(
	'/media',
	authJwt.verifyToken,
	mediaController.getAllListingMedia
)

// uoload media in listing
mediaRouter.post(
	'/media',
	authJwt.verifyToken,
	validateUsers(),
	validate,
	mediaController.uploadListingMedia
)

// Delete Media
mediaRouter.delete('/media', authJwt.verifyToken, mediaController.mediaDelete)

module.exports = mediaRouter

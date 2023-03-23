const express = require('express')
const mediaRouter = express.Router()
const listingMediaController = require('../controller/listingMedia_controller')
const authJwt = require('../middleware/validators/authJwt')

// fetch all currency
mediaRouter.get(
	'/listingMedia',
	authJwt.verifyToken,
	listingMediaController.getAllListingMedia
)
// Write media upload route here
mediaRouter.post(
	'/listingMedia',
	authJwt.verifyToken,
	listingMediaController.uploadListingMedia
)

module.exports = mediaRouter

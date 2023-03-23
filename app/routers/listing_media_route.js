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

module.exports = mediaRouter

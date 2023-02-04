const express = require('express')
const listingRouter = express.Router()
const listingController = require('../controller/listing_controller')
const authJwt = require('../middleware/validators/authJwt')

// fetch all listing
listingRouter.get(
	'/listing',
	authJwt.verifyToken,
	listingController.getAllListing
)

// fetch all listing
listingRouter.post(
	'/listing',
	authJwt.verifyToken,
	listingController.listingStore
)

// Edit  listing
listingRouter.put(
	'/listing',
	authJwt.verifyToken,
	listingController.listingEdit
)

// Delete listing
listingRouter.delete(
	'/listing',
	authJwt.verifyToken,
	listingController.listingDelete
)

module.exports = listingRouter

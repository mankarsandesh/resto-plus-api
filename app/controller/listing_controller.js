const {
	allListing,
	storeListing,
	deleteListing,
	editListing,
} = require('../components/models/listing.interface')
const { successResponse, serverError } = require('../utils/utils')

// fetch all currency
const getAllListing = async (req, res) => {
	try {
		const listing = await allListing()
		return res.send(successResponse(listing))
	} catch (error) {
		console.log(error)
		res.status(500).send(serverError())
	}
}

// Store City  Information
const listingStore = async (req, res) => {
	try {
		const userBody = req.body
		const listing = await storeListing(userBody)
		if (listing.error) {
			return res.status(400).send(badRequestError(listing.error))
		}
		return res.send(successResponse(listing))
	} catch (error) {
		console.log(error)
		res.status(500).send(serverError())
	}
}
// Edit Listing
const listingEdit = async (req, res) => {
	try {
		const userBody = req.body
		const listing = await editListing(userBody)
		if (listing.error) {
			return res.status(400).send(badRequestError(listing.error))
		}
		return res.send(successResponse(listing))
	} catch (error) {
		console.log(error)
		res.status(500).send(serverError())
	}
}

// Delete Listing
const listingDelete = async (req, res) => {
	try {
		const listingID = req.body.listingID
		const listing = await deleteListing(listingID)
		if (listing.error) {
			return res.status(400).send(badRequestError(listing.error))
		}
		return res.send(successResponse(listing))
	} catch (error) {
		console.log(error)
		res.status(500).send(serverError())
	}
}

module.exports = {
	getAllListing,
	listingStore,
	listingDelete,
	listingEdit,
}

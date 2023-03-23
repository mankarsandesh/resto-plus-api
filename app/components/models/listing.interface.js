const listingModel = require('../../models/listing')
const { findCity } = require('../../components/models/city.interface')
const { findCategory } = require('../../components/models/category.interface')
const { findCurrency } = require('../../components/models/currency.interface')

const allListing = async () => {
	try {
		const listing = await listingModel.findAll({ raw: true })

		// Find category Name
		const catBody = { categoryID: listing[0].categoryID }
		const categoryResponse = await findCategory(catBody)

		// Find city Name
		const cityBody = { cityID: listing[0].city }
		const cityResponse = await findCity(cityBody)

		// Find currency Name
		const currencyyBody = { currencyID: listing[0].currency }
		const currencyyResponse = await findCurrency(currencyyBody)

		const listingReturn = {
			listingID: listing[0].listingID,
			emailID: listing[0].emailID,
			phoneNo: listing[0].phoneNo,
			contactNo: listing[0].contactNo,
			listingTitle: listing[0].listingTitle,
			listingDescription: listing[0].listingDescription,
			category: categoryResponse,
			city: cityResponse,
			address: listing[0].address,
			website: listing[0].website,
			workingHours: listing[0].workingHours,
			currency: currencyyResponse,
			priceStatus: 3,
			priceFrom: listing[0].priceFrom,
			priceTo: listing[0].priceTo,
			youTubeVideo: listing[0].youTubeVideo,
			facebook: listing[0].facebook,
			instagram: listing[0].instagram,
			listingKeywords: listing[0].listingKeywords,
			listingStatus: listing[0].listingStatus,
			createdAt: listing[0].createdAt,
			updatedAt: listing[0].updatedAt,
			deleted_at: listing[0].deletedAt,
		}
		return listingReturn
	} catch (error) {
		console.log(error)
		throw new Error()
	}
}

const storeListing = async (data, res) => {
	try {
		const listing = await listingModel.create(data, { raw: true })
		return listing
	} catch (error) {
		console.log(error)
	}
}
const editListing = async (data, res) => {
	try {
		const listingCheck = await listingModel.findOne({
			where: { listingID: data.listingID },
		})
		if (!listingCheck) {
			return 'listingID not found'
		}
		// If the Listing is deleted
		const updated = await listingModel.update(data, {
			where: { listingID: data.listingID },
		})
		return 'Sucessfully Listing Updated'
	} catch (error) {
		console.log(error)
		throw new Error(error.message)
	}
}
const deleteListing = async (listingID, res) => {
	try {
		const deleted = await listingModel.destroy({
			where: { listingID: listingID },
		})
		if (deleted == 1) {
			// If the category is deleted
			return 'Sucessfully Listing Deleted'
		} else {
			return 'listingID not found'
		}
	} catch (error) {
		console.log(error)
		throw new Error(error.message)
	}
}

module.exports = {
	allListing,
	storeListing,
	deleteListing,
	editListing,
}

const {allListing,storeListing} = require('../components/models/listing.interface');
const {successResponse, serverError} = require('../utils/utils');

// fetch all currency 
const getAllListing =  async (req, res) => {

    try {
        const listing = await allListing();
        return res.send(successResponse(listing));
    } catch (error) {
        console.log(error);
        res.status(500).send(serverError());
    }
}

// Store City  Information
const listingStore = async (req,res) => {
    try {        
        const userBody = req.body;    
        const city = await storeListing(userBody);
        if(city.error) {
            return res.status(400).send(badRequestError(city.error));
        }
        return res.send(successResponse(city));
    } catch (error) {
        console.log(error);
        res.status(500).send(serverError());
    }
}

module.exports = {
    getAllListing,
    listingStore    
}
const listingModel = require('../../models/listing');


const allListing  =  async () => {
    try {
        const listing = await listingModel.findAll({raw: true});
        return listing;
    } catch (error) {
        console.log(error);
        throw new Error();
    }
}

const storeListing = async (data, res) => {
    try {
        const listing = await listingModel.create(data, { raw: true });
        return listing;
    } catch (error) {
        console.log(error);        
    }
}


module.exports = {
    allListing,
    storeListing
}
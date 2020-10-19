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

const deleteListing = async (listingID, res) => {
    try {
        const deleted = await listingModel.destroy({ where: { listingID : listingID} });
        if(deleted == 1) {
            // If the category is deleted
            return "Sucessfully Listing Deleted";
        }else{
            return "listingID not found";
        }
    } catch (error) {
        console.log(error);
        throw new Error(error.message);
    }
}


module.exports = {
    allListing,
    storeListing,
    deleteListing
}
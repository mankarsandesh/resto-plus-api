const countryModel = require('../../models/country');

const allCountry  =  async () => {
    try {
        const country = await countryModel.findAll({raw: true});
        return country;
    } catch (error) {
        console.log(error);
        throw new Error();
    }
}

const storeCountry = async (data, res) => {
    try {
        const country = await countryModel.create(data, { raw: true });
        return country;
    } catch (error) {
        console.log(error);        
    }
}

const deleteCountry = async (countryID, res) => {
    try {
        const deleted = await countryModel.destroy({ where: { countryID : countryID} });
        if(deleted == 1) {
            // If the category is deleted
            return "Sucessfully Country Deleted";
        }else{
            return "countryID not found";
        }
    } catch (error) {
        console.log(error);
        throw new Error(error.message);
    }
}


module.exports = {
    allCountry,
    storeCountry,
    deleteCountry
}
const {allCountry,storeCountry} = require('../components/models/country.interface');
const {successResponse, serverError} = require('../utils/utils');

// fetch all Country 
const getAllCountry =  async (req, res) => {

    try {
        const city = await allCountry();
        return res.send(successResponse(city));
    } catch (error) {
        console.log(error);
        res.status(500).send(serverError());
    }
}

// Store City  Information
const countryStore = async (req,res) => {
    try {        
        const userBody = req.body;    
        const country = await storeCountry(userBody);
        if(country.error) {
            return res.status(400).send(badRequestError(country.error));
        }
        return res.send(successResponse(country));
    } catch (error) {
        console.log(error);
        res.status(500).send(serverError());
    }
}


module.exports = {
    getAllCountry,
    countryStore
}
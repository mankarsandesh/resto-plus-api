const {allCountry} = require('../components/models/country.interface');
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

module.exports = {
    getAllCountry
}
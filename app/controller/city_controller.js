const {allCity,storeCity} = require('../components/models/city.interface');
const {successResponse, serverError} = require('../utils/utils');

// fetch all currency 
const getAllCity =  async (req, res) => {

    try {
        const city = await allCity();
        return res.send(successResponse(city));
    } catch (error) {
        console.log(error);
        res.status(500).send(serverError());
    }
}

// Store City  Information
const cityStore = async (req,res) => {
    try {        
        const userBody = req.body;    
        const city = await storeCity(userBody);
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
    getAllCity,
    cityStore
}
const {allCity} = require('../components/models/city.interface');
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

module.exports = {
    getAllCity
}
const {allCategory} = require('../components/models/category.interface');
const {successResponse, serverError} = require('../utils/utils');

// fetch all currency 
const getAllCategory =  async (req, res) => {

    try {
        const category = await allCategory();
        return res.send(successResponse(category));
    } catch (error) {
        console.log(error);
        res.status(500).send(serverError());
    }
}

module.exports = {
    getAllCategory
}
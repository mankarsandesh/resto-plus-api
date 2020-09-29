const {allUsers} = require('../components/models/users.interface');
const {successResponse, serverError} = require('../utils/utils');

// fetch all currency 
const getAllListingMedia =  async (req, res) => {

    try {
        const user = await allUsers();
        return res.send(successResponse(user));
    } catch (error) {
        console.log(error);
        res.status(500).send(serverError());
    }
}

module.exports = {
    getAllListingMedia
}
const {allUsers , storeUsers} = require('../components/models/users.interface');
const {successResponse, serverError} = require('../utils/utils');

// fetch all get All users 
const getAllUsers =  async (req, res) => {

    try {
        const user = await allUsers();
        return res.send(successResponse(user));
    } catch (error) {
        console.log(error);
        res.status(500).send(serverError());
    }
}

// Store users Information
const usersStore = async (req,res) => {
    try {        
        const userBody = req.body;       
        console.log(userBody);
        const users = await storeUsers(userBody);
        if(users.error) {
            return res.status(400).send(badRequestError(users.error));
        }
        return res.send(successResponse(users));
    } catch (error) {
        console.log(error);
        res.status(500).send(serverError());
    }
}


module.exports = {
    getAllUsers,
    usersStore
}
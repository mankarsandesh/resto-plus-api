const usersModel = require('../../models/users');


const allUsers  =  async () => {
    try {
        const user = await usersModel.findAll({raw: true});
        return user;
    } catch (error) {
        console.log(error);
        throw new Error();
    }
}

const storeUsers = async (data, res) => {
    try {
        const users = await usersModel.create(data, { raw: true });
        return users;
    } catch (error) {
        console.log(error);        
    }
}


module.exports = {
    allUsers,
    storeUsers
}
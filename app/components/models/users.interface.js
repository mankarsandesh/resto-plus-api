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


module.exports = {
    allUsers
}
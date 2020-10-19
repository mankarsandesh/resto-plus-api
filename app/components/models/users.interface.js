const usersModel = require('../../models/users');


const allUsers = async () => {
    try {
        const user = await usersModel.findAll({ raw: true });
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


const deleteUser = async (userID, res) => {
    try {
        const deleted = await usersModel.destroy({ where: { userID: userID } });
        if (deleted == 1) {
            // If the category is deleted
            return "Sucessfully Users Deleted";
        } else {
            return "userID not found";
        }
    } catch (error) {
        console.log(error);
        throw new Error(error.message);
    }
}



module.exports = {
    allUsers,
    storeUsers,
    deleteUser
}
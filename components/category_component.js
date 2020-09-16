const { getAllCategory } = require('../models/category');

/**
 * Get users on the basis of search filter or filter date and user type
 *
 * @param {*} pageCount
 * @param {*} columnName
 * @param {*} sort
 * @param {*} perPage
 * @param {*} userId
 * @returns
 */
const fetchAllCategory = async () => {
    try {
        // Get all users count and users details
        const { count, users } = await getAllCategory();
        return {
            users
        }
    } catch (error) {
        console.log(error);
        throw new Error();
    }
}


module.exports = {
    fetchAllCategory
}
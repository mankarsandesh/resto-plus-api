const { allCategory, storeCategory,deleteCategory } = require('../components/models/category.interface');
const { successResponse, serverError } = require('../utils/utils');

// fetch all Category 
const getAllCategory = async (req, res) => {

    try {
        const category = await allCategory();
        return res.send(successResponse(category));
    } catch (error) {
        console.log(error);
        res.status(500).send(serverError());
    }
}


// Store Category  Information
const categoryStore = async (req, res) => {
    try {
        const userBody = req.body;
        const category = await storeCategory(userBody);
        if (category.error) {
            return res.status(400).send(badRequestError(category.error));
        }
        return res.send(successResponse(category));
    } catch (error) {
        console.log(error);
        res.status(500).send(serverError());
    }
}


// Delete Category 
const categoryDelete = async (req, res) => {
    try {
        const categoryID = req.body.categoryID;
        const category = await deleteCategory(categoryID);
        if (category.error) {
            return res.status(400).send(badRequestError(category.error));
        }
        return res.send(successResponse(category));
    } catch (error) {
        console.log(error);
        res.status(500).send(serverError());
    }
}


module.exports = {
    getAllCategory,
    categoryStore,
    categoryDelete
}
const categoryModel = require('../../models/category');


const allCategory  =  async () => {
    try {
        const category = await categoryModel.findAll({raw: true});
        return category;
    } catch (error) {
        console.log(error);
        throw new Error();
    }
}


const storeCategory = async (data, res) => {
    try {
        const category = await categoryModel.create(data, { raw: true });
        return category;
    } catch (error) {
        console.log(error);        
    }
}


const deleteCategory = async (categoryID, res) => {
    try {
        const deleted = await categoryModel.destroy({ where: { categoryID : categoryID} });
        if(deleted == 1) {
            // If the category is deleted
            return "Sucessfully Category Deleted";
        }else{
            return "categoryID not found";
        }
    } catch (error) {
        console.log(error);
        throw new Error(error.message);
    }
}

module.exports = {
    allCategory,
    storeCategory,
    deleteCategory
}
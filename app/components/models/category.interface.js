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



module.exports = {
    allCategory,
    storeCategory
}
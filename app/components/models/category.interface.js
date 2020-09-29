const categoryModel = require('../../models/category');


const allCategory  =  async () => {
    try {
        const city = await categoryModel.findAll({raw: true});
        return city;
    } catch (error) {
        console.log(error);
        throw new Error();
    }
}


module.exports = {
    allCategory
}
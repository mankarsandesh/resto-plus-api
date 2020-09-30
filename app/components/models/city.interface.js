const cityModel = require('../../models/city');
const { QueryTypes } = require('sequelize');
const Sequelize = require('sequelize');
const db = require('../../db/config');


const allCity  =  async () => {
    try {
        const city = await cityModel.findAll({raw: true});
        return city;
    } catch (error) {
        console.log(error);
        throw new Error();
    }
}

const storeCity = async (data, res) => {
    try {
        const city = await cityModel.create(data, { raw: true });
        return city;
    } catch (error) {
        console.log(error);        
    }
}





module.exports = {
    allCity,
    storeCity
}
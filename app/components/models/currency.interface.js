const currencyModel = require('../../models/currency');
const { QueryTypes } = require('sequelize');
const Sequelize = require('sequelize');
const db = require('../../db/config');


const allCurrency  =  async () => {
    try {
        const currency = await currencyModel.findAll({raw: true});
        return currency;
    } catch (error) {
        console.log(error);
        throw new Error();
    }
}

const storeCurrency = async (data, res) => {
    try {
        const currency = await currencyModel.create(data, { raw: true });
        return currency;
    } catch (error) {
        console.log(error);        
    }
}




module.exports = {
    allCurrency,
    storeCurrency
}
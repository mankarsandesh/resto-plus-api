const currencyModel = require('../../models/currency');
const { QueryTypes } = require('sequelize');
const sequelize = require('sequelize');
const db = require('../../db/config');


const allCurrency = async () => {
    try {
        const currency = await currencyModel.findAll({ raw: true });
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

const deleteCurrency = async (currencyID, res) => {
    try {
        const deleted = await currencyModel.destroy({ where: { currencyID: currencyID } });
        if (deleted == 1) {
            // If the Currency is deleted
            return "Sucessfully Currency Deleted";
        } else {
            return "currencyID not found";
        }
    } catch (error) {
        console.log(error);
        throw new Error(error.message);
    }
}




module.exports = {
    allCurrency,
    storeCurrency,
    deleteCurrency
}
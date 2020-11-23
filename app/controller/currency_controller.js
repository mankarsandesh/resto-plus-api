const { allCurrency, storeCurrency, deleteCurrency,editCurrency } = require('../components/models/currency.interface');
const { successResponse, serverError } = require('../utils/utils');

// fetch all currency 
const getAllCurrency = async (req, res) => {

    try {
        const currency = await allCurrency();
        return res.send(successResponse(currency));
    } catch (error) {
        console.log(error);
        res.status(500).send(serverError());
    }
}


// Store Currency Information
const currencyStore = async (req, res) => {
    try {
        const userBody = req.body;
        const currency = await storeCurrency(userBody);
        if (currency.error) {
            return res.status(400).send(badRequestError(currency.error));
        }
        return res.send(successResponse(currency));
    } catch (error) {
        console.log(error);
        res.status(500).send(serverError());
    }
}


// Delete Currency 
const currencyDelete = async (req, res) => {
    try {
        const currencyID = req.body.currencyID;
        const currency = await deleteCurrency(currencyID);
        if (currency.error) {
            return res.status(400).send(badRequestError(currency.error));
        }
        return res.send(successResponse(currency));
    } catch (error) {
        console.log(error);
        res.status(500).send(serverError());
    }
}

// Edit Currency 
const currencyEdit = async (req, res) => {
    try {
        const userBody = req.body;
        const currency = await editCurrency(userBody);
        if (currency.error) {
            return res.status(400).send(badRequestError(currency.error));
        }
        return res.send(successResponse(currency));
    } catch (error) {
        console.log(error);
        res.status(500).send(serverError());
    }
}


module.exports = {
    getAllCurrency,
    currencyStore,
    currencyDelete,
    currencyEdit
}
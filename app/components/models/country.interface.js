const countryModel = require('../../models/country');

const allCountry  =  async () => {
    try {
        const country = await countryModel.findAll({raw: true});
        return country;
    } catch (error) {
        console.log(error);
        throw new Error();
    }
}


module.exports = {
    allCountry
}
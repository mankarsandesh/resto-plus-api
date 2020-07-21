module.exports = app => {

    const listingService = require('../controller/listingService');

    var router = require("express").Router();

    router.post('/', listingService.create);

    app.use('/api/listing', router);

};
module.exports = app => {

    const categoryService = require('../controller/categoryService');

    var router = require("express").Router();

    router.post('/', categoryService.create);

    app.use('/api/category', router);

};
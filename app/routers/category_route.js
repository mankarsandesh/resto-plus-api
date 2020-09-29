const express = require('express');
const categoryRouter = express.Router();
const categoryController = require('../controller/category_controller');


// fetch all City
categoryRouter.get('/category', categoryController.getAllCategory );

module.exports = categoryRouter;
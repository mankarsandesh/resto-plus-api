const express = require('express');
const categoryRoute = express.Router();
const categoryService = require('../controller/categoryService');


// Submit Category
categoryRoute.post('/', categoryService.create);
// Show all Category
categoryRoute.get('/showCategory', categoryService.findAll);


module.exports = categoryRoute;
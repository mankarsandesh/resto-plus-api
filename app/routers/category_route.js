const express = require('express');
const categoryRouter = express.Router();
const categoryController = require('../controller/category_controller');


// fetch all Category
categoryRouter.get('/category', categoryController.getAllCategory );

// Create Category
categoryRouter.post('/category', categoryController.categoryStore );

module.exports = categoryRouter;
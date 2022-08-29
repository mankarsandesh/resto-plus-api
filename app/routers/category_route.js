const express = require('express')
const categoryRouter = express.Router()
const categoryController = require('../controller/category_controller')

// Fetch all Category
categoryRouter.get('/category', categoryController.getAllCategory)

// Create Category
categoryRouter.post('/category', categoryController.categoryStore)

// Delete Category
categoryRouter.delete('/category', categoryController.categoryDelete)

// Edit Category
categoryRouter.put('/category', categoryController.categoryEdit)

module.exports = categoryRouter

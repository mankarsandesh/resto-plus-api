const express = require('express')
const categoryRouter = express.Router()
const categoryController = require('../controller/category_controller')
const authJwt = require('../middleware/validators/authJwt')
// Fetch all Category
categoryRouter.get(
	'/category',
	authJwt.verifyToken,
	categoryController.getAllCategory
)

// Create Category
categoryRouter.post(
	'/category',
	authJwt.verifyToken,
	categoryController.categoryStore
)

// Delete Category
categoryRouter.delete(
	'/category',
	authJwt.verifyToken,
	categoryController.categoryDelete
)

// Edit Category
categoryRouter.put(
	'/category',
	authJwt.verifyToken,
	categoryController.categoryEdit
)

module.exports = categoryRouter

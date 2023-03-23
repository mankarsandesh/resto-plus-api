const categoryModel = require('../../models/category')

// All category
const allCategory = async () => {
	try {
		const category = await categoryModel.findAll({ raw: true })
		return category
	} catch (error) {
		console.log(error)
		throw new Error()
	}
}
// Add Category
const storeCategory = async (data, res) => {
	try {
		const category = await categoryModel.create(data, { raw: true })
		return category
	} catch (error) {
		console.log(error)
	}
}
// Delete Category
const deleteCategory = async (categoryID, res) => {
	try {
		const deleted = await categoryModel.destroy({
			where: { categoryID: categoryID },
		})
		if (deleted == 1) {
			// If the category is deleted
			return 'Sucessfully Category Deleted'
		} else {
			return 'categoryID not found'
		}
	} catch (error) {
		console.log(error)
		throw new Error(error.message)
	}
}
// Edit Category
const editCategory = async (data, res) => {
	try {
		const categoryCheck = await categoryModel.findOne({
			where: { categoryID: data.categoryID },
		})
		if (!categoryCheck) {
			return 'categoryID not found'
		}
		// If the City is deleted
		const updated = await categoryModel.update(data, {
			where: { categoryID: data.categoryID },
		})
		return 'Sucessfully category Updated'
	} catch (error) {
		console.log(error)
		throw new Error(error.message)
	}
}
// FInd category
const findCategory = async (data, res) => {
	try {
		const categoryCheck = await categoryModel.findOne({
			where: { categoryID: data.categoryID },
		})
		return categoryCheck
	} catch (error) {
		console.log(error)
		throw new Error(error.message)
	}
}
module.exports = {
	allCategory,
	storeCategory,
	deleteCategory,
	editCategory,
	findCategory,
}

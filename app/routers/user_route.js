const express = require('express');
const usersRouter = express.Router();
const userController = require('../controller/users_controller');


// fetch all currency
usersRouter.get('/users', userController.getAllUsers );

module.exports = usersRouter;
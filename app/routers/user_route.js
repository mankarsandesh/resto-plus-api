const express = require('express');
const usersRouter = express.Router();
const userController = require('../controller/users_controller');


// fetch all Users
usersRouter.get('/users', userController.getAllUsers);

usersRouter.post('/users', userController.usersStore);



module.exports = usersRouter;
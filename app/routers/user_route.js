const express = require('express');
const usersRouter = express.Router();
const userController = require('../controller/users_controller');
// validation 
const {validateUsers} = require('../middleware/validators/users');
const validate = require('../middleware/validators/validate');


// fetch all Users
usersRouter.get('/users', userController.getAllUsers);

usersRouter.post('/users', validateUsers(),validate,userController.usersStore);



module.exports = usersRouter;
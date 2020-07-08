const express = require('express');
const listing = express.Router();

const listingService = require('../services/listingService');
const {successResponse, serverError, badRequestError} = require('../utils/utils');
const {validateUserLogin, validateUserLogout, validateGetUser, validateUpdateUser} = require('../middleware/validators/user');
const validate = require('../middleware/validators/validate');


// User login
userRouter.post('/users/login', validateUserLogin(), validate, listingService.userCreate );

userRouter.get('/users/logout', validateUserLogout(), validate, async (req, res) => {
    try {
        const userUUID = req.query.userUUID;
        const logout = await logoutUser(userUUID);
        if(logout.error) {
            return res.status(400).send(badRequestError(logout.error));
        } else {
            return res.status(200).send(successResponse(logout));
        }
    } catch (error) {
        console.log(error);
        res.status(500).send(serverError());
    }
});

userRouter.get('/users', validateGetUser(), validate, async (req, res) => {
    try {
        const portalProviderUUID = req.query.portalProviderUUID;
        const userUUID = req.query.userUUID;
        const user = await getUserDetails(portalProviderUUID, userUUID);
        if (user.error) {
            return res.status(400).send(badRequestError(user.error));
        }
        return res.send(successResponse(user));
    } catch (error) {
        console.log(error);
        res.status(500).send(serverError());
    }
});


module.exports = listing;
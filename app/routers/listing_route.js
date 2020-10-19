const express = require('express');
const listingRouter = express.Router();
const listingController = require('../controller/listing_controller');


// fetch all listing
listingRouter.get('/listing', listingController.getAllListing );

// fetch all listing
listingRouter.post('/listing', listingController.listingStore );

// Delete listing
listingRouter.delete('/listing', listingController.listingDelete);




module.exports = listingRouter;
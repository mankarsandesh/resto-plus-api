const express = require('express');
const app = express();
// const cors = require('cors');
// const multer = require('multer');
// const upload = multer();

// Load all environment variables
require('dotenv').config();

// Connect DB
require('./app/db/config');

// Routers
const cityRouter = require('./app/routers/city_route');
const userRouter = require('./app/routers/user_route');
const countryRouter = require('./app/routers/country_route');
const categoryRouter = require('./app/routers/category_route');
const currencyRouter = require('./app/routers/currency_route');
const listingRouter = require('./app/routers/listing_route');



const bodyParser = require('body-parser');
const port = process.env.PORT || 3000;
app.use(bodyParser.json());
// app.use(upload.array());

var device = require('express-device');
app.use(device.capture());

// //CORS configuration
// const corsOptions = {
//     origin: '*',
//     //Expose the token on the client side in the response
//     exposedHeaders: ['token'],
//     withCredentials: true
// };

// //CORS middleware
// app.use(cors(corsOptions));

// Routers
app.use(cityRouter);
app.use(userRouter);
app.use(countryRouter);
app.use(categoryRouter);
app.use(currencyRouter);
app.use(listingRouter);

app.listen(port, () => {
    console.log(`Server is up on port ${port}`);
});

module.exports = app
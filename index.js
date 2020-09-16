const express = require('express');
const app = express();
const cors = require('cors');
// const multer = require('multer');
// const upload = multer();

// Load all environment variables
require('dotenv').config();

// Connect DB
require('./app/db/config');

// Routers
const cityRouter = require('./app/routers/city_route');
const userRouter = require('./app/routers/user_route');


const bodyParser = require('body-parser');
const port = process.env.PORT || 5005;
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


app.listen(port, () => {
    console.log(`Server is up on port ${port}`);
});

module.exports = app
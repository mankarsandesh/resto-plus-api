const express = require('express');
const app = express();

// Load all environment variables
require('dotenv').config();

// Connect DB
require('./db/db.config');



const bodyparser = require('body-parser');

// Routers
const categoryRouter = require('./router/categoey_router');


const port = process.env.PORT || 5001;

app.use(bodyparser.json());




// Routers
app.use(categoryRouter);


app.listen(port, () => {
   console.log(`App launched on port ${port}`);
});

module.exports = app
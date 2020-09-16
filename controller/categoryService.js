


const { fetchAllCategory } = require('../components/category_component');

// Create and Save a new listing
exports.create = (req, res) => {
  // Validate request
  if (!req.body.title) {
    res.status(400).send({
      message: "Content can not be empty!"
    });
    return;
  }

  // Create a Tutorial
  const category = {
    title: req.body.title,
    description: req.body.description,
    icon: "sasas"
  };

  // Save Tutorial in the database
  Category.create(category)
    .then(data => {
      res.send(data);
    })
    .catch(err => {
      res.status(500).send({
        message:
          err.message || "Some error occurred while creating the Tutorial."
      });
    });
}

// Retrieve all listings from the database.
exports.findAll = async (req, res) => {

  try {
    const fetchCategory = await fetchAllCategory();
    return res.send(fetchCategory);
  } catch(error){
    console.log(error);
  }
};

// Find a single listing with an id
exports.findOne = (req, res) => {

};

// Update a listing by the id in the request
exports.update = (req, res) => {

};

// Delete a listing with the specified id in the request
exports.delete = (req, res) => {

};

// Delete all listings from the database.
exports.deleteAll = (req, res) => {

};

// Find all published listings
exports.findAllPublished = (req, res) => {

};
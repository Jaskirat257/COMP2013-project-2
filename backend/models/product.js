const mongoose = require("mongoose");

//Author: Jaskirat
//Description: PROJECT-2

const productSchema = new mongoose.Schema({

  // Product name 
  productName: {
    type: String,
    required: true,
  },

  // Brand of the product
  brand: {
    type: String,
    required: true,
  },

  // Image link for the product picture
  image: {
    type: String,
    required: true,
  },

  
  price: {
    type: String,
    required: true,
  },

  // Quantity used for the cart 
  quantity: {
    type: Number,
    default: 0,
  },
});

// Export the model so other files can use it
module.exports = mongoose.model("Product", productSchema);
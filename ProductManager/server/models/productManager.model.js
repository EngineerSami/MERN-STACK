const mongoose = require('mongoose');

const ProductSchema = new mongoose.Schema({
  title :{
    type : String
  },

  price : {
    type : Number
  },


  description  : {
    type : String
  }
})

// to export the schema

const Product = mongoose.model('Product' , ProductSchema );
module.exports = Product;
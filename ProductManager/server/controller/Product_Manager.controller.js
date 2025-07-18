const Product = require('../models/productManager.model')

module.exports = {
  findAllProduct : (req , res) => {
    Product.find()
    .then(allProducts => res.json(allProducts))
    .catch(err => res.status(500).json({ success: false, error: err.message }));
  },



  createProduct : (req , res) => {
    console.log("hiiiiii")
    Product.create(req.body)
    .then((newProduct) => res.json({product : newProduct}))
    .catch((err) => res.status(400).json({message:'Error creating product'  , error :err}))
  },


  findProduct : (req , res) => {
    Product.findOne({_id : req.params.id})
    .then(product => {
      if (!product) {
        return res.status(404).json({ message: 'Product not found' });
      }
      res.json(product);
    })
    .catch(err => res.status(400).json({ message: 'Error retrieving product', error: err }));
} , 


updateProduct: (req, res) => {
  Product.findOneAndUpdate({_id: req.params.id},req.body )
  .then(result => {
    console.log(result);
    res.json(result)})
  .catch(error => res.status(404).json(error));
},

deleteProduct: (req, res) => {
  Product.deleteOne({_id: req.params.id})
  .then(() => res.json({ message: 'Product deleted successfully.' }))
  .catch(err => res.status(404).json({ message: 'Product not found', error: err }));
}


}
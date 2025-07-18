const ProudectController = require('../controller/Product_Manager.controller')


module.exports = (app) => {
app.get('/api/products', ProudectController.findAllProduct)
app.post('/api/products',ProudectController.createProduct)
app.get('/api/product/:id',ProudectController.findProduct)
app.put('/api/product/:id',ProudectController.updateProduct)
app.delete('/api/product/:id',ProudectController.deleteProduct)
}


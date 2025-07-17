import React, { useState } from "react";
import ProductForm from "./ProductForm";
import DeleteButton from "./DeleteButton";

const mockDB = [
  { id: 1, name: "Product A", price: 10, category: "Books" },
  { id: 2, name: "Product B", price: 20, category: "Electronics" },
];

const ProductManager = () => {
  const [products, setProducts] = useState(mockDB);
  const [selectedProduct, setSelectedProduct] = useState(null);

  const handleCreate = (newProduct) => {
    setProducts([...products, { ...newProduct, id: Date.now() }]);
  };

  const handleUpdate = (updatedProduct) => {
    setProducts(
      products.map((p) => (p.id === updatedProduct.id ? updatedProduct : p))
    );
    setSelectedProduct(null);
  };

  const handleDelete = (id) => {
    setProducts(products.filter((p) => p.id !== id));
    if (selectedProduct?.id === id) {
      setSelectedProduct(null);
    }
  };

  return (
    <div>
      <h2>{selectedProduct ? "Edit Product" : "Add Product"}</h2>
      <ProductForm
        initialData={selectedProduct}
        onSubmit={selectedProduct ? handleUpdate : handleCreate}
      />
      <h3>All Products</h3>
      {products.map((product) => (
        <div key={product.id}>
          <p>
            {product.name} - ${product.price} ({product.category})
          </p>
          <button onClick={() => setSelectedProduct(product)}>Edit</button>
          <DeleteButton onDelete={() => handleDelete(product.id)} />
        </div>
      ))}
    </div>
  );
};

export default ProductManager;

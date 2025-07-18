import React, { useState, useEffect } from "react";
import axios from "axios";
import {Link}  from 'react-router-dom';

const ProductList = () => {
  const [products, setProducts] = useState([]); 

  // Function to fetch products
  const fetchProducts = async () => {
    try {
      const response = await axios.get("http://localhost:8080/api/products"); // Use correct API endpoint
      setProducts(response.data);
    } catch (error) {
      console.error("Error fetching products", error);
      setProducts([]); 

    }
  };

  useEffect(() => {
    fetchProducts();
  }, [products]);

  return (
    <div>
      <h2>Product List</h2>
      {products.length === 0 ? <p>No products available</p> : null}
      <ul>
        {products.map((product) => (
          <li key={product._id}>
           <Link to = {`/product/${product._id}`} ><h3>{product.title}</h3></Link> 
            <p>Price: ${product.price}</p>
            <p>Description: {product.description}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ProductList;

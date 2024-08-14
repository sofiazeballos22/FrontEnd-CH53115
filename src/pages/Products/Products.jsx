import React from 'react';
import './Products.scss'; // Para manejar el estilo en un archivo CSS separado

function Products({ products, onAddToCart }) {
  return (
    <div>
      <h1>Products</h1>
      <div className="header-container">
        <div className="welcome">¡Bienvenidos!</div>
        <a href="/cart" className="view-cart">View Cart</a>
      </div>
      <div className="products-container">
        {products.map((product) => (
          <div key={product.id} className="product-card">
            <h2>{product.title}</h2>
            <p>{product.description}</p>
            <p>Price: {product.price}</p>
            <p>Category: {product.category}</p>
            <p>Status: {product.status}</p>
            <button onClick={() => onAddToCart(product.id)}>Add to Cart</button>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Products;

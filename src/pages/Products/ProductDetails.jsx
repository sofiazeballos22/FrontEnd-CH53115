import React from 'react';

function ProductDetail({ product }) {
  const addToCart = async (productId) => {
    try {
      const response = await fetch(`/api/carts/add/${productId}`, {
        method: 'POST',
      });

      if (!response.ok) {
        throw new Error('Failed to add product to cart');
      }

      alert('Product added to cart');
    } catch (error) {
      alert(error.message);
    }
  };

  return (
    <div>
      <h1>{product.title}</h1>
      <p>{product.description}</p>
      <p>Price: {product.price}</p>
      <p>Category: {product.category}</p>
      <p>Status: {product.status ? 'Available' : 'Unavailable'}</p>
      <button onClick={() => addToCart(product.id)}>Add to Cart</button>
    </div>
  );
}

export default ProductDetail;

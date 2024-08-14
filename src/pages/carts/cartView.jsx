import React from 'react';

function CartView({ products, onRemove }) {
  return (
    <div>
      <h1>Cart</h1>
      {products.map((item) => (
        <div key={item.product.id}>
          <h2>{item.product.title}</h2>
          <p>Quantity: {item.quantity}</p>
          <button onClick={() => onRemove(item.product.id)}>Remove from Cart</button>
        </div>
      ))}
    </div>
  );
}

export default CartView;
import React from 'react';

function CheckoutView({ cartId, totalAmount, onPurchase }) {
  const handleSubmit = (e) => {
    e.preventDefault();
    onPurchase(cartId);
  };

  return (
    <div>
      <h1>Finalizar Compra</h1>
      <form onSubmit={handleSubmit}>
        <h2>Total: {totalAmount}</h2>
        <button type="submit">Completar Compra</button>
      </form>
    </div>
  );
}

export default CheckoutView;
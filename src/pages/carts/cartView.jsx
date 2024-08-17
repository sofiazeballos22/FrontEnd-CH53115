import React, { useState, useEffect } from 'react';
import './cart.scss';  // Import the CSS/SCSS file
import { finalizePurchase } from '../../services/productService';  // Importamos la función

function CartView() {
  const [cart, setCart] = useState(null); // Cambié el estado inicial a null para manejar todo el carrito, no solo los productos
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchCart = async () => {
      try {

        const response = await fetch('https://ecommercech53115-production.up.railway.app/api/carts/user-cart',

      //  const response = await fetch('http://localhost:8080/api/carts/user-cart',
           { credentials: 'include' });
        if (!response.ok) throw new Error('Failed to fetch cart');
        const data = await response.json();
        console.log('Datos del carrito:', data); // Verificar si el ID está presente

        setCart(data);  // Aquí guardas el carrito completo
        setLoading(false);
      } catch (error) {
        setError(error.message);
        setLoading(false);
      }
    };
    fetchCart();
  }, []);

  const updateQuantity = (productId, newQuantity) => {
    setCart(prevCart => ({
      ...prevCart,
      products: prevCart.products.map(item => 
        item.product._id === productId ? { ...item, quantity: newQuantity } : item
      )
    }));
  };

  const removeFromCart = async (productId) => {
    try {
      const response = await fetch(`/api/carts/${productId}/remove`, {
        method: 'DELETE',
        credentials: 'include',
        headers: {
          'Content-Type': 'application/json',
        },
      });
      if (response.ok) {
        setCart(prevCart => ({
          ...prevCart,
          products: prevCart.products.filter(item => item.product._id !== productId)
        }));
      } else {
        throw new Error('Error removing item from cart');
      }
    } catch (error) {
      console.error('Error al eliminar del carrito:', error);
    }
  };
/*
  const finalizePurchase = async () => {
    if (!cart?.id) {  // Verificamos si cart e id existen
      console.error('Carrito no tiene un ID');
      return;
    }
    try {
      const response = await fetch(`/api/carts/${cart.id}/purchase`, {
        method: 'POST',
        credentials: 'include',
        headers: {
          'Content-Type': 'application/json',
        },
      });
      if (response.ok) {
        const data = await response.json();
        if (data.ticket && data.ticket.id) {
          window.location.href = `/ticket/${data.ticket.id}`;
        } else {
          alert('No se pudo generar el ticket.');
        }
      }
    } catch (error) {
      console.error('Error en la compra:', error);
    }
  };*/

  const handleFinalizePurchase = async () => {
    if (!cart || !cart.id) {
      console.error('Carrito no tiene un ID');
      return;
    }

    try {
      const purchaseResult = await finalizePurchase(cart.id);  // Usamos la función del servicio
      if (purchaseResult.ticket && purchaseResult.ticket.id) {
        window.location.href = `/ticket/${purchaseResult.ticket.id}`;
      } else {
        alert('No se pudo generar el ticket.');
      }
    } catch (error) {
      console.error('Error en la compra:', error);
    }
  };

  if (loading) return <div>Loading...</div>;
  if (error) return <div>Error: {error}</div>;

  if (loading) return <div>Loading...</div>;
  if (error) return <div>Error: {error}</div>;

  return (
    <div className="cart-container">
      <h1>Your Cart</h1>
      <table>
        <thead>
          <tr>
            <th>Product</th>
            <th>Stock</th>
            <th>Quantity</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {cart?.products?.map((item) => (  // Aseguramos que cart y products existen
            <tr key={item.product._id}>
              <td>{item.product.title}</td>
              <td>{item.product.stock}</td>
              <td>
                <input
                  type="number"
                  value={item.quantity}
                  min="1"
                  max={item.product.stock}
                  onChange={(e) => updateQuantity(item.product._id, e.target.value)}
                />
              </td>
              <td>
                <button onClick={() => removeFromCart(item.product._id)}>Remove</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      <button className="finalize-btn" onClick={handleFinalizePurchase}>Finalize Purchase</button>
    </div>
  );
}

export default CartView;

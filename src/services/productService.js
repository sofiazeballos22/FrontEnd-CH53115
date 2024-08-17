//const API_URL = 'http://localhost:8080/api';  // La URL del backend
const API_URL = import.meta.env.VITE_API_URL;  // Obtén la URL desde la variable de entorno

export const addToCart = async (productId) => {
  try {
   

    const response = await fetch(`${API_URL}/carts/add/${productId}`, {
      method: 'POST',
      credentials: 'include',  // Esto envía las cookies automáticamente
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ quantity: 1 }),  // Agregar 1 producto al carrito
    });

    if (!response.ok) {
      throw new Error('Error al agregar el producto al carrito');
    }

    return await response.json();
  } catch (error) {
    console.error('Error al agregar el producto al carrito:', error);
    throw error;
  }
};
export const finalizePurchase = async (cartId) => {
  try {
    const response = await fetch(`${API_URL}/carts/${cartId}/purchase`, {
      method: 'POST',
      credentials: 'include',
      headers: {
        'Content-Type': 'application/json',
      },
    });

    if (!response.ok) {
      throw new Error('Error al finalizar la compra');
    }

    return await response.json();
  } catch (error) {
    console.error('Error al finalizar la compra:', error);
    throw error;
  }
};
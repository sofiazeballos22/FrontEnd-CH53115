import React, { useEffect, useState, useContext } from 'react';
import './Products.scss'; // Para manejar el estilo en un archivo CSS separado
import { UserContext } from '../../context/UserContext'; // Asegúrate de importar el contexto correctamente
import { addToCart } from '../../services/productService'; // Importar la función de agregar al carrito
import { Link } from 'react-router-dom';

function Products() {
  const { user } = useContext(UserContext); // Usa el contexto para obtener el usuario
  const [products, setProducts] = useState([]);  // Estado para almacenar los productos
  const [loading, setLoading] = useState(true);  // Estado para el manejo del cargando
  const [error, setError] = useState(null);  // Estado para el manejo de errores

  useEffect(() => {
    // Función para obtener los productos desde el backend
    const fetchProducts = async () => {
      try {
        const response = await fetch('http://localhost:8080/api/products');
        if (!response.ok) {
          throw new Error('Failed to fetch products');
        }
        const data = await response.json();
        setProducts(data.payload);  // Suponiendo que los productos están en `payload`
        setLoading(false);
      } catch (error) {
        setError(error.message);
        setLoading(false);
      }
    };

    fetchProducts();
  }, []);

  const handleAddToCart = async (productId) => {
    try {
      const response = await addToCart(productId);  // Usamos la función importada de productServices
      alert('Producto agregado al carrito');
    } catch (error) {
      alert('Error al agregar producto al carrito');
      console.error(error);
    }
  };

  // Mostrar mensaje de cargando o de error
  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error: {error}</div>;
  }

  // Renderizar los productos una vez cargados
  return (
    <div className="products-page">
      <header className="header-container">
        <h1 className='text-base font-serif-georgia font-semibold md:font-serif'>¡Bienvenidos!</h1>
        <div className="user-actions">
          <span>{user.first_name} {user.last_name}</span> {/* Mostrar nombre del usuario */}
          <Link to="/user-cart" className="view-cart">View Cart</Link>
          <a href="/logout" className="logout">Logout</a>
        </div>
      </header>
      <div className="products-container font-serif-georgia md:font-serif">
        {products.map((product) => (
          <div key={product.id} className="product-card">
            <h2>{product.title}</h2>
            <p>{product.description}</p>
            <p>Price: {product.price}</p>
            <p>Category: {product.category}</p>
            <p>Status: {product.status ? 'Available' : 'Not available'}</p>
            <button onClick={() => handleAddToCart(product.id)}>Add to Cart</button>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Products;

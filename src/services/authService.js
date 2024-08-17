//const API_URL = 'http://localhost:8080/api';  // Usando localhost por ahora
const API_URL = import.meta.env.VITE_API_URL;  // Obtén la URL desde la variable de entorno

export const login = async (email, password) => {
  try {
    const response = await fetch(`${API_URL}/users/login`, {
      method: 'POST',
      credentials: 'include',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ email, password }),
    });

    const data = await response.json();
    
    if (data.token) {
      // Aquí puedes almacenar el token en una cookie
      document.cookie = `jwt=${data.token}; path=/; SameSite=Lax`;
    }
    
    return data;  // Retorna los datos, que incluyen el user y el token
  } catch (error) {
    console.error('Error al iniciar sesión:', error);
    throw error;
  }
};


export const register = async (userData) => {
  try {
    const response = await fetch(`${API_URL}/auth/register`, {
      method: 'POST',
      credentials: 'include',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(userData),
    });

    if (!response.ok) {
      throw new Error('Error en la solicitud');
    }

    return await response.json();
  } catch (error) {
    console.error('Error al registrar:', error);
  }
};

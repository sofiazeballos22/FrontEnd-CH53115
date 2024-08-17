const API_URL = 'http://localhost:8080/api';  // Usando localhost por ahora
/*
export const login = async (email, password) => {
  try {
    const response = await fetch(`${API_URL}/users/login`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ email, password }),
    });

    const data = await response.json();
    console.log('Login response:', data);  // Aquí deberías ver el token, el user, etc.

    if (!response.ok) {
      throw new Error('Error en la solicitud');
    } else {
      console.log('JWT Token:', data.token);  // Verifica el token devuelto por el backend
      
      // Guardar el token en localStorage
      localStorage.setItem('token', data.token);
      
      return data;  // Retorna los datos, que incluyen el user y el token
    }
  } catch (error) {
    console.error('Error al iniciar sesión:', error);
    throw error;  // Lanza el error para manejarlo en el componente
  }
};
*/
// authService.js
export const login = async (email, password) => {
  try {
    const response = await fetch(`${API_URL}/users/login`, {
      method: 'POST',
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

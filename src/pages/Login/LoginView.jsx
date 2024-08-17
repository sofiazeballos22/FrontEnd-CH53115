import React, { useState, useContext } from 'react';
import { login } from '../../services/authService';
import { useNavigate } from 'react-router-dom';
import { UserContext } from '../../context/UserContext';  // Importa el contexto

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();
  const { setUser } = useContext(UserContext);  // Usar setUser del contexto

  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      const response = await login(email, password);
      if (response) {
        console.log('Login exitoso:', response);
        
        
        setUser(response.user);

      
        if (response.user.role === 'admin') {
          navigate('/admin/manage-users');
        } else {
          navigate('/products');
        }
      }
    } catch (error) {
      console.error('Error al iniciar sesión:', error);
    }
  };

  return (
    <div className="login flex justify-center flex-col items-center min-h-screen p-4">
      <h2 className='text-base font-serif-georgia font-semibold md:font-serif text-red-900 mb-4'>Login</h2>
      <form onSubmit={handleLogin} className="w-full max-w-md">
        <div className="mb-4">
          <label htmlFor="email" className="block text-gray-700">Email:</label>
          <input
            type="email"
            id="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
            className="w-full border border-gray-300 p-2 rounded"
          />
        </div>
        <div className="mb-4">
          <label htmlFor="password" className="block text-gray-700">Password:</label>
          <input
            type="password"
            id="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
            className="w-full border border-gray-300 p-2 rounded"
          />
        </div>
        <div className="flex justify-between items-center">
          <button
            type="submit"
            className="bg-red-500 text-white py-2 px-4 rounded hover:bg-red-600"
          >
            Login
          </button>
          <div>
            <button
              type="button"
              onClick={() => navigate('/forgotPassword')}
              className="text-blue-500 hover:underline"
            >
              Forgot Password?
            </button>
            <span className="mx-2">|</span>
            <button
              type="button"
              onClick={() => navigate('/register')}
              className="text-blue-500 hover:underline"
            >
              Register
            </button>
          </div>
        </div>
      </form>
    </div>
  );
};

export default Login;
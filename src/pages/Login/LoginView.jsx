import "./Login.scss";

import React, { useState } from 'react';
import { login } from '../../services/authService';
import { useNavigate } from 'react-router-dom';
import '../../pages/Login/Login.scss'; 


const Login = () => {
  const [ email, setEmail ] = useState('');
  const [ password, setPassword ] = useState('');
  const navigate = useNavigate();


  const handleLogin = async (e) => {
    e.preventDefault();
    const response = await login(email, password);
    if (response) {
      console.log('Login exitoso:', response);
    }
  };

  return (
    <div className="login
    flex justify-center flex-col items-center min-h-screen">
      <h2 className='text-base font-serif-georgia font-semibold md:font-serif text-red-900'>Login</h2>
      <form onSubmit={handleLogin}>
        <div>
          <label>Email:</label>
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </div>
        <div>
          <label>Password:</label>
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
        </div>
        <div className="w-full flex justify-between">
          <button className="font-semibold"
          type="submit">Login</button>


          <button
          className="text-blue-500"
          type="button"
          onClick={() => navigate('/forgotPassword')} // Redirige al formulario de recuperación
          >
          Forgot Password?
          </button>
        </div>
      </form>
    </div>
  );
};

export default Login;

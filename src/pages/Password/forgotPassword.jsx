import React, { useState } from 'react';

function ForgotPassword() {
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [error, setError] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch('https://ecommercech53115-production.up.railway.app/api/users/forgot-password', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ email }),
      });

      const data = await response.json();

      if (response.ok) {
        setMessage('Se ha enviado el enlace de restablecimiento de contraseña a tu correo.');
      } else {
        setError(data.error || 'Ocurrió un error');
      }
    } catch (error) {
      setError('Error al enviar la solicitud de restablecimiento de contraseña');
    }
  };

  return (
    <div className='register flex justify-center flex-col items-center min-h-screen'>
      <h1 className='text-base font-serif-georgia font-semibold md:font-serif text-red-900'>Forgot Password</h1>
      <form className='h-64 flex flex-col justify-between' onSubmit={handleSubmit}>
        <div>
          <label className='text-xl' htmlFor="email">Email:</label>
          <input
            type="email"
            id="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </div>
        <button className='shadow-md text-2x1 mt-4 p-2 bg-gray-200 font-serif-georgia rounded text-xl' type="submit">
          Enviar
        </button>
      </form>

      {message && <p style={{ color: 'green' }}>{message}</p>}
      {error && <p style={{ color: 'red' }}>{error}</p>}
    </div>
  );
}

export default ForgotPassword;

import React, { useState } from 'react';


function ForgotPassword({ onSubmit }) {
  const [email, setEmail] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit({ email });

  };

  return (
    <div className=' register
    flex justify-center flex-col items-center min-h-screen'>
      <h1 className='text-base font-serif-georgia font-semibold md:font-serif text-red-900'>Forgot Password</h1>
      <form className='h-64 flex  flex-col justify-between'
       onSubmit={handleSubmit}>
        <div>
          <label className='text-xl'
           htmlFor="email">Email:</label>
          <input
            type="email"
            id="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </div>
        <button className='shadow-md text-2x1 mt-4 p-2 bg-gray-200 font-serif-georgia rounded text-xl'
         type="submit">Enviar</button>
      </form>
    </div>
  );
}

export default ForgotPassword;
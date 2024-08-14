import React, { useState } from 'react';


function ResetPassword() {
  const [ token, setToken ] = useState('');
  const [ newPassword, setNewPassword ] = useState('');
  const [ confirmPassword, setConfirmPassword ] = useState('');
  const [ error, setError ] = useState('');

  const handleSubmit = async (e) => {
        e.preventDefault();

        if (newPassword !== confirmPassword) {
            setError('Passwords do not match');
            return;
        }

        try {
        const response = await fetch('api/users/reset-password', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                token,
                newPassword,
            }),
        });

        if (!response.ok) {
            throw new Error('Failed to reset password');
        }

        } catch (err) {
           setError(err.message);
        }
    };

  return (
    <div className='register flex justify-center flex-col items-center min-h-screen'>
      <h1 className='text-base font-serif-georgia font-semibold md:font-serif text-red-900'>Reset Your Password</h1>
      <form className='h-64 flex  flex-col justify-between'
      onSubmit={handleSubmit}>
        <input type="hidden" value={token} />

        <div>
          <label htmlFor="newPassword">New Password:</label>
          <input
            type="password"
            id="newPassword"
            value={newPassword}
            onChange={(e) => setNewPassword(e.target.value)}
            required
          />
        </div>

        <div>
          <label htmlFor="confirmPassword">Confirm Password:</label>
          <input
            type="password"
            id="confirmPassword"
            value={confirmPassword}
            onChange={(e) => setConfirmPassword(e.target.value)}
            required
          />
        </div>

        <button className='shadow-md text-2x1 mt-4 p-2 bg-gray-200 font-serif-georgia rounded'
        type="submit">Reset Password</button>

        {error && <p style={{ color: 'red' }}>{error}</p>}
      </form>
    </div>
  );
}

export default ResetPassword;
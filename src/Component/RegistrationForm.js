import React, { useState } from 'react';

function RegistrationForm() {
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState('');
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    try {
      const response = await makeApiCall(); // Replace with your actual API call
      setSuccess(true);
    } catch (error) {
      setError(error.message);
    } finally {
      setLoading(false);
    }
  };

  const makeApiCall = async () => {
    // Simulating an API call
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve('API response');
      }, 2000);
    });
  };

  return (
    <div className='container'>
      <h2>User Registration</h2>
      <form onSubmit={handleSubmit}>
        <div className=''>
          <label htmlFor='username' className='form-label'>
            username
          </label>
          <input
            type='text'
            id='username'
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />
        </div>

        <div className=''>
          <label htmlFor='email' className='form-label'>
            email
          </label>
          <input
            type='email'
            id='email'
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>

        <div className='mb-3'>
          <label htmlFor='password' className='form-label'>
            Password
          </label>
          <input
            type='password'
            id='password'
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>

        <button type='submit' disabled={loading}>
          Register
        </button>

        {loading && <p>Loading...</p>}
        {success && <p>Registration successful!</p>}
        {error && <p style={{ color: 'red' }}>{error}</p>}
      </form>
    </div>
  );
}

export default RegistrationForm;
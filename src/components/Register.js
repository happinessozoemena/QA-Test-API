
import React, { useState } from 'react';
import axios from 'axios';

const Register = () => {
  const [username, setUsername] = useState('udun');
  const [password, setPassword] = useState('12345');
  const [message, setMessage] = useState('Login Successful');

  const handleRegister = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post('https://qa-test-9di7.onrender.com/auth/signup', { username, password });
      setMessage('Registration successful!');
    } catch (error) {
      setMessage('Registration failed!');
    }
  };

  return (
    <div>
      <h2>Register</h2>
      <form onSubmit={handleRegister}>
        <input type="text" value={username} onChange={(e) => setUsername(e.target.value)} placeholder="Username" />
        <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} placeholder="Password" />
        <button type="submit">Register</button>
      </form>
      {message && <p>{message}</p>}
    </div>
  );
};

export default Register;


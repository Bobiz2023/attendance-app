import React, { useState } from 'react';
import axios from 'axios';

function LoginForm() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await axios.post('http://localhost:5000/api/auth/login', { username, password });
      localStorage.setItem('token', res.data.token);
      // Redirect based on role
      const role = jwt.decode(res.data.token).role;
      if (role === 'admin') {
        window.location.href = '/admin';
      } else {
        window.location.href = '/parent';
      }
    } catch (err) {
      alert('Login Failed');
    }
  };

  return (
    <div className="login-container">
      <h1>Login</h1>
      <form onSubmit={handleSubmit}>
        <input type="text" placeholder="Username" onChange={(e) => setUsername(e.target.value)} />
        <input type="password" placeholder="Password" onChange={(e) => setPassword(e.target.value)} />
        <button type="submit">Login</button>
      </form>
    </div>
  );
}

export default LoginForm;


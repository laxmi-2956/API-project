import axios from 'axios';
import { useState } from 'react';

import { useNavigate } from 'react-router-dom';

function Login({ setUsername }) {
  const [loginData, setLoginData] = useState({ username: '', password: '' });
  const navigate = useNavigate();

  const handleChange = (e) => {
    setLoginData({ ...loginData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await axios.post('http://localhost:5000/api/login', loginData);
      localStorage.setItem('token', res.data.token);
      setUsername(res.data.username);
      alert('Login Successful!');
      navigate('/');
    } catch (err) {
      alert(err.response.data.message || 'Error during login');
    }
  };

  return (
    <form onSubmit={handleSubmit} style={{ width: '300px', margin: 'auto', marginTop: '40px' }}>
      <h2>Login</h2>
      <input name="username" placeholder="Username" onChange={handleChange} required />
      <input name="password" type="password" placeholder="Password" onChange={handleChange} required />
      <button type="submit">Login</button>
    </form>
  );
}

export default Login;

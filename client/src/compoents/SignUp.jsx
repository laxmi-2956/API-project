import axios from 'axios';
import { useState } from 'react';


function SignUp() {
  const [formData, setFormData] = useState({
    username: '', email: '', dob: '', role: 'Explorer', location: '', password: '', confirmPassword: ''
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault(); 
    try {
      const res = await axios.post('http://localhost:8080/api/auth/signup', formData);
      alert(res.data.message);
    } catch (err) {
      alert(err.response.data.message || 'Error during signup');
    }
  };

  return (
    <form onSubmit={handleSubmit} style={{ width: '300px', margin: 'auto', marginTop: '40px' }}>
      <h2>Sign Up</h2>
      <input name="username" placeholder="Username" onChange={handleChange} required />
      <input name="email" type="email" placeholder="Email" onChange={handleChange} required />
      <input name="dob" type="date" onChange={handleChange} required />
      <select name="role" onChange={handleChange}>
        <option>Explorer</option>
        <option>Admin</option>
      </select>
      <input name="location" placeholder="Location" onChange={handleChange} />
      <input name="password" type="password" placeholder="Password" onChange={handleChange} required />
      <input name="confirmPassword" type="password" placeholder="Confirm Password" onChange={handleChange} required />
      <button type="submit">Register</button>
    </form>
  );
}

export default SignUp;

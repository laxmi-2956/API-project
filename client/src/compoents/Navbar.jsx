import { Link, useNavigate } from 'react-router-dom';

function Navbar({ username, setUsername }) {
  const navigate = useNavigate();

  const handleLogout = () => {
    localStorage.removeItem('token');
    setUsername('');
    navigate('/login');
  };

  return (
    <nav style={{ display: 'flex', justifyContent: 'space-around', padding: '10px', backgroundColor: '#ddd' }}>
      <Link to="/">Home</Link>
      <Link to="/about">About</Link>
      <Link to="/signup">Sign Up</Link>
      <Link to="/login">Login</Link>
      {username && (
        <>
          <span>Welcome, {username}</span>
          <button onClick={handleLogout}>Logout</button>
        </>
      )}
    </nav>
  );
}

export default Navbar;

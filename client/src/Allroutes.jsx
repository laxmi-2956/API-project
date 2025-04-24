import { Routes, Route } from 'react-router-dom';
import Home from './compoents/Home';
import About from './compoents/About';
import SignUp from './compoents/SignUp';
import Login from './compoents/Login';

    
function AllRoutes({ setUsername }) {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/about" element={<About />} />
      <Route path="/signup" element={<SignUp />} />
      <Route path="/login" element={<Login setUsername={setUsername} />} />
    </Routes>
  );
}

export default AllRoutes;

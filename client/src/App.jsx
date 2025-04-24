


import { useState } from 'react';
import AllRoutes from './Allroutes';
import Navbar from './compoents/Navbar';

function App() {
  const [username, setUsername] = useState('');

  return (
    <>
      <Navbar username={username} setUsername={setUsername} />
      <AllRoutes setUsername={setUsername} />
    </>
  );
}

export default App;

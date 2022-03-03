import React, { useEffect } from 'react';
import { Routes, Route, useNavigate } from 'react-router-dom';

//customized components
import Home from './Container/Home';
import { Login } from './Components';
import { fetchUser } from './Utils/fetchUser';

const App = () => {

  const navigate = useNavigate();

  useEffect(() => { 
    const user = fetchUser();
    if (!user) { 
      navigate('/login');
    }
  }, []);

  return (
    <Routes>
      <Route path='login' element={<Login />} />
      <Route path='/*' element={<Home />} />
    </Routes>
  )
}

export default App
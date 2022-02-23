import React from 'react';
import { Routes, Route, useNavigate } from 'react-router-dom';

//customized components
import Home from './Container/Home';
import { Login } from './Components';

const App = () => {
  return (
    <Routes>
      <Route path='login' element={<Login />} />
      <Route path='/*' element={<Home />} />
    </Routes>
  )
}

export default App
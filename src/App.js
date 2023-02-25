import React from 'react';
import {BrowserRouter, Routes, Route} from 'react-router-dom'
import Home from './pages/Home'
import Details from './pages/Details'

function App() {
  return (
    <BrowserRouter>
      <Routes>
          <Route path='/details' element={<Details />} />
          <Route path='/' element={<Home />} />
        </Routes>
    </BrowserRouter>
  );
}

export default App;

import React from 'react';
import Home from './components/Home';
import { Routes,Route } from 'react-router-dom'
import About from './components/About';
import Contact from './components/Contact';
import Works from './components/Works';
import Skills from './components/Skills';
import CustomCursor from './components/CustomCursor';


const App = () => {
  return (
    <div className='flex'>
      <CustomCursor />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/about' element={<About />} />
        <Route path='/contact' element={<Contact />} />
        <Route path='/works' element={<Works />} />
        <Route path='/skills' element={<Skills />} />
      </Routes>
    </div>
  );
}

export default App;

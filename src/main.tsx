import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { BrowserRouter, Link, Routes, Route } from 'react-router';
import './index.css';
import App from './App.tsx';

import About from './About';
import Products from './Products';


createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <BrowserRouter>
    <ul>
      <li><Link to="/"  >Home</Link></li>
      <li><Link to="/about"  >About</Link></li>
      <li><Link to="/products"  >Products</Link></li>
    </ul>
    <Routes>
        <Route path="/" element={<App />} />
        <Route path="/about" element={<About />} />
        <Route path="/products" element={<Products />} />
      </Routes>
      
    </BrowserRouter>
  </StrictMode>
);

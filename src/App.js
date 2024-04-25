import React from 'react';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import './App.css';

// Importing pages
import Home from "./pages/Home";
import About from './pages/About';
import Contact from './pages/Contact';
import Courses from './pages/Courses';
import Portfolio from './pages/Portfolio';
import Services from './pages/Services';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/courses" element={<Courses />} />
        <Route path="/portfolio" element={<Portfolio />} />
        <Route path="/services" element={<Services />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;

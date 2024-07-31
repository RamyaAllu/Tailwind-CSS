// App.jsx
import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import NavBarSection from './TailwindBlocks/components/NavBarSection';
import { Homepage } from './TailwindBlocks/components/HomePage';
import ContactSection from './TailwindBlocks/components/ContactSection';
import HoverSection from './TailwindBlocks/components/HoverSection';
import TeamSection from './TailwindBlocks/components/TeamSection';
import LandingPage from './TailwindBlocks/pages/LandingPage';

const App = () => {
  const [theme, setTheme] = useState('light');

  useEffect(() => {
    if (theme === 'dark') {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, [theme]);

  const handleThemeChange = () => {
    setTheme(theme === 'light' ? 'dark' : 'light');
  };

  return (
    <Router>
      <NavBarSection change={handleThemeChange} />
       
      
      <Routes>
        <Route path="/home" element={<LandingPage/>} />
        <Route path="/about" element={<TeamSection/>} />
        <Route path="/snacks" element={<HoverSection/>} />
        <Route path="/contact" element={<ContactSection/>} />
      </Routes>
    </Router>
  );
};

export default App;

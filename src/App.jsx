import About from './components/About.jsx';
import Contact from './components/Contact.jsx';
import Experience from './components/Experience.jsx';
import Footer from './components/Footer.jsx';
import Header from './components/Header.jsx';
import Hero from './components/Hero.jsx';
import Projects from './components/Projects.jsx';
import Skills from './components/Skills.jsx';
import Testimonials from './components/Testimonials.jsx';
import './App.css';
import './index.css';

import { useState, useEffect } from 'react';

function App() {
  const [isDarkMode, setIsDarkMode] = useState(true);

  useEffect(() => {
    console.log('Dark mode changed:', isDarkMode);
    const root = document.documentElement;
    if (isDarkMode) {
      root.classList.add('dark');
      console.log('Added dark class to HTML');
    } else {
      root.classList.remove('dark');
      console.log('Removed dark class from HTML');
    }
    console.log('HTML classes:', root.className);
  }, [isDarkMode]);

  const toggleTheme = () => {
    console.log('Toggle clicked! Current mode:', isDarkMode);
    setIsDarkMode(prev => !prev);
  };

  return (
    <div className="min-h-screen transition-colors duration-300 bg-gray-50 text-gray-900 dark:bg-gray-950 dark:text-white">
      <Header isDarkMode={isDarkMode} toggleTheme={toggleTheme} />
      <main>
        <Hero />
        <About />
        <Skills />
        <Projects />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}

export default App;


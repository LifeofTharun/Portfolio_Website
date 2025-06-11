import React from 'react';
import { ThemeProvider } from './context/ThemeContext';
import ParticleBackground from './components/ParticleBackground';
import NavBar from './components/NavBar';
import ScrollProgressBar from './components/ScrollProgressBar';
import Hero from './sections/Hero';
import About from './sections/About';
import Skills from './sections/Skills';
import Projects from './sections/Projects';
import Contact from './sections/Contact';
import Footer from './components/Footer';

function App() {
  return (
    <ThemeProvider>
      <div className="min-h-screen bg-white text-dark-800 transition-colors duration-300 dark:bg-dark-900 dark:text-white">
        <ParticleBackground />
        <ScrollProgressBar />
        <NavBar />
        
        <main>
          <Hero />
          <About />
          <Skills />
          <Projects />
          <Contact />
        </main>
        
        <Footer />
      </div>
    </ThemeProvider>
  );
}

export default App;
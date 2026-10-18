import { useEffect, useRef } from 'react';
import Preloader from './components/Preloader.jsx';
import Navbar from './components/Navbar.jsx';
import Hero from './sections/Hero.jsx';
import About from './sections/About.jsx';
import Projects from './sections/Projects.jsx';
import Contact from './sections/Contact.jsx';
import Footer from './components/Footer.jsx';

export default function App() {
  const gridRef = useRef(null);

  useEffect(() => {
    const handleMouseMove = (e) => {
      if (gridRef.current) {
        gridRef.current.style.setProperty('--mouse-x', `${e.clientX}px`);
        gridRef.current.style.setProperty('--mouse-y', `${e.clientY}px`);
      }
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  return (
    <div className="app-layout" ref={gridRef}>
      {/* Intro Loading Animation */}
      <Preloader />

      {/* Professional subtle animated background */}
      <div className="premium-grid-bg"></div>
      {/* Interactive glowing grid layer */}
      <div className="premium-grid-bg-glow"></div>
      
      <Navbar />
      <main>
        <Hero />
        <hr className="section-divider" />
        <Projects />
        <hr className="section-divider" />
        <About />
        <hr className="section-divider" />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}

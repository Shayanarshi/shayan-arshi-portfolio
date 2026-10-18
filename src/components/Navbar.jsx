import { useState, useEffect } from 'react';

export default function Navbar() {
  const [activeSection, setActiveSection] = useState('home');
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const sections = ['home', 'work', 'about', 'contact'];
      const scrollPos = window.scrollY + 120; // Slightly larger offset for better triggering

      // Check if user has scrolled to the very bottom of the page
      if (Math.ceil(window.innerHeight + window.scrollY) >= document.documentElement.scrollHeight - 20) {
        setActiveSection('contact');
        return;
      }

      for (const id of sections) {
        const el = document.getElementById(id);
        if (el) {
          const { offsetTop, offsetHeight } = el;
          if (scrollPos >= offsetTop && scrollPos < offsetTop + offsetHeight) {
            setActiveSection(id);
            // Don't break, keep iterating. Later sections overwrite earlier ones if overlapping.
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const closeMenu = () => setMobileMenuOpen(false);

  return (
    <header className="navbar-header" style={{ position: 'sticky', top: 0, zIndex: 100 }}>
      <div className="navbar-container">
        {/* Logo */}
        <a href="#home" className="navbar-logo" onClick={closeMenu}>
          Shayan Arshi
        </a>

        {/* Right side container for Desktop Nav + Actions */}
        <div className="navbar-right-group">
          {/* Desktop Nav */}
          <nav className="navbar-nav">
            {['home', 'work', 'about', 'contact'].map((item) => (
              <a
                key={item}
                href={`#${item}`}
                className={`nav-link${activeSection === item ? ' active' : ''}`}
              >
                {item.charAt(0).toUpperCase() + item.slice(1)}
              </a>
            ))}
          </nav>

          <div className="navbar-actions">
            
                <a
               href="/Shayan_Arshi_Resume.pdf"
                  target="_blank"
                    rel="noopener noreferrer"
                    className="btn-resume"
                        >
                       Get Resume
                      </a>


            {/* Mobile toggle */}
            <button
              type="button"
              className="mobile-toggle-btn"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              aria-label="Toggle menu"
            >
              <span></span>
              <span></span>
              <span></span>
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div className="mobile-menu active">
          <nav className="mobile-nav">
            {['home', 'work', 'about', 'contact'].map((item) => (
              <a
                key={item}
                href={`#${item}`}
                className="mobile-nav-link"
                onClick={closeMenu}
              >
                {item.charAt(0).toUpperCase() + item.slice(1)}
              </a>
            ))}
            <div className="mobile-nav-cta">
              <a href="/Shayan_Arshi_Resume.pdf" target="_blank" rel="noopener noreferrer" className="btn-resume">
                Get Resume
              </a>
            </div>
          </nav>
        </div>
      )}
    </header>
  );
}

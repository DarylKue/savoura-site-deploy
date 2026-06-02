import React, { useState, useEffect } from 'react';
import './Navbar.css';

const Navbar = ({ activeSection, onNavigate }) => {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const links = [
    { id: 'accueil', label: 'Accueil' },
    { id: 'produits', label: 'Produits' },
    { id: 'apropos', label: 'À Propos' },
  ];

  return (
    <header className={`navbar-wrapper ${scrolled ? 'scrolled' : ''}`}>
      <nav className="navbar-pill">
        <div className="navbar-logo" onClick={() => onNavigate('accueil')}>
          <img src="/images/logo.jpeg" alt="Savoura" />
        </div>

        <ul className="navbar-links">
          {links.map(link => (
            <li key={link.id}>
              <button
                className={`nav-link ${activeSection === link.id ? 'active' : ''}`}
                onClick={() => onNavigate(link.id)}
              >
                {link.label}
                {activeSection === link.id && <span className="nav-dot" />}
              </button>
            </li>
          ))}
        </ul>

        <button className="nav-cta" onClick={() => onNavigate('produits')}>
          Commander
        </button>

        <button
          className={`burger ${menuOpen ? 'open' : ''}`}
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Menu"
        >
          <span /><span /><span />
        </button>
      </nav>

      {/* Mobile menu */}
      <div className={`mobile-menu ${menuOpen ? 'open' : ''}`}>
        {links.map(link => (
          <button
            key={link.id}
            className={`mobile-link ${activeSection === link.id ? 'active' : ''}`}
            onClick={() => { onNavigate(link.id); setMenuOpen(false); }}
          >
            {link.label}
          </button>
        ))}
        <button className="nav-cta mobile-cta" onClick={() => { onNavigate('produits'); setMenuOpen(false); }}>
          Commander
        </button>
      </div>
    </header>
  );
};

export default Navbar;

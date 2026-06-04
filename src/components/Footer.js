import React from 'react';
import './Footer.css';

const Footer = () => (
  <footer className="footer">
    <div className="container footer-inner">
      <div className="footer-brand">
        <img src="/images/logo.jpeg" alt="Savoura" className="footer-logo" />
        <div>
          <p className="footer-brand-name">Savoura</p>
          <p className="footer-tagline">Le Goût Local Revisité</p>
        </div>
      </div>
      <div className="footer-links">
        <a href="#accueil">Accueil</a>
        <a href="#produits">Produits</a>
        <a href="#apropos">À Propos</a>
        <a href="#contacts">Contacts</a>
      </div>
      <p className="footer-copy">© 2025 Savoura · Groupe 13 – Innov+ · Togo</p>
    </div>
  </footer>
);

export default Footer;

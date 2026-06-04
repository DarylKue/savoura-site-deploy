import React, { useEffect, useRef } from 'react';
import './Hero.css';

const Hero = ({ onNavigate }) => {
  const heroRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      entries => entries.forEach(e => {
        if (e.isIntersecting) e.target.classList.add('visible');
      }),
      { threshold: 0.1 }
    );
    heroRef.current?.querySelectorAll('.animate').forEach(el => observer.observe(el));
    return () => observer.disconnect();
  }, []);

  return (
    <div className="hero" ref={heroRef}>
      {/* Background organic shapes */}
      <div className="hero-bg">
        <div className="blob blob-1" />
        <div className="blob blob-2" />
        <div className="blob blob-3" />
      </div>

      <div className="container hero-content">
        {/* Left column */}
        <div className="hero-text">
          <span className="hero-eyebrow animate">Fait avec amour au Togo</span>
          <h1 className="hero-title animate">
            Le Goût Local<br />
            <span className="hero-highlight">Revisité</span>
          </h1>
          <p className="hero-desc animate">
            Des produits alimentaires modernes, naturels et compétitifs issus
            des terres togolaises. Chips de patate douce et ignames surgelées
            100% locaux, sans conservateurs ni additifs.
          </p>
          <div className="hero-badges animate">
            <span className="badge badge-green">✓ 100% Local</span>
            <span className="badge badge-orange">✓ Sans Conservateurs</span>
            <span className="badge badge-brown">✓ Sans Additifs</span>
          </div>
          <div className="hero-actions animate">
            <button className="btn-primary" onClick={() => onNavigate('produits')}>
              Découvrir nos produits
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                <path d="M5 12h14M12 5l7 7-7 7" />
              </svg>
            </button>
            <button className="btn-secondary" onClick={() => onNavigate('apropos')}>
              Notre histoire
            </button>
          </div>
        </div>

        {/* Right column - product showcases */}
        <div className="hero-visuals animate">
          <div className="hero-card hero-card--chips" onClick={() => onNavigate('produits')}>
            <div className="hero-card-img-wrap">
              <img
                src="/images/chips.jpeg"
                alt="Chips de Patate Douce Savoura"
                className="hero-product-img"
                style={{ mixBlendMode: 'multiply' }}
              />
            </div>
            <div className="hero-card-info">
              <span className="hero-card-name">Chips de Patate Douce</span>
              <span className="hero-card-tag">4 saveurs · 90g</span>
            </div>
          </div>

          <div className="hero-card hero-card--ignames" onClick={() => onNavigate('produits')}>
            <div className="hero-card-img-wrap">
              <img
                src="/images/ignames.png"
                alt="Ignames Surgelées Savoura"
                className="hero-product-img"
                style={{ mixBlendMode: 'multiply' }}
              />
            </div>
            <div className="hero-card-info">
              <span className="hero-card-name">Ignames Surgelées</span>
              <span className="hero-card-tag">Prêtes à cuire · 600g</span>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom wave */}
      <div className="hero-wave">
        <svg viewBox="0 0 1440 80" fill="none" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="none">
          <path d="M0 40C360 80 720 0 1440 40V80H0V40Z" fill="#fff" fillOpacity="0.15"/>
          <path d="M0 60C360 20 720 80 1440 60V80H0V60Z" fill="var(--cream)"/>
        </svg>
      </div>
    </div>
  );
};

export default Hero;

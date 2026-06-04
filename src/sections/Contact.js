import React, { useEffect, useRef } from 'react';
import './Contact.css';

const contactMethods = [
  {
    icon: '📞',
    label: 'Téléphone',
    value: '+228 97 19 88 15',
    sub: 'Lun – Sam · 8h – 18h',
    href: 'tel:+22890000000',
    color: '#4a7c2f',
  },
  {
    icon: '✉️',
    label: 'Email',
    value: 'savoura@yahoo.fr',
    sub: 'Réponse sous 24h',
    href: 'mailto:savoura@yahoo.fr',
    color: '#e8841a',
  },
  {
    icon: '📱',
    label: 'Réseaux sociaux',
    value: '@savoura',
    sub: 'Facebook · Instagram',
    href: '#',
    color: '#3a2007',
  },
];

const Contact = () => {
  const sectionRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      entries => entries.forEach(e => {
        if (e.isIntersecting) e.target.classList.add('visible');
      }),
      { threshold: 0.1 }
    );
    sectionRef.current?.querySelectorAll('.ct-anim').forEach(el => observer.observe(el));
    return () => observer.disconnect();
  }, []);

  return (
    <div className="contact-section" ref={sectionRef}>
      <div className="contact-wave-top">
        <svg viewBox="0 0 1440 80" fill="none" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="none">
          <path d="M0 40C360 80 720 0 1440 40V0H0V40Z" fill="#2a0e02" />
        </svg>
      </div>

      <div className="container contact-inner">
        {/* Header */}
        <div className="contact-header ct-anim">
          <span className="section-eyebrow" style={{ color: 'var(--orange-light)' }}>
            Passez commande
          </span>
          {/* <h2 className="contact-title">Nous Contacter</h2> */}
          <p className="contact-intro">
            Intéressé par nos produits ? Passez commande directement ou
            posez-nous vos questions — notre équipe vous répond rapidement.
          </p>
        </div>

        {/* Cards */}
        <div className="contact-cards ct-anim">
          {contactMethods.map(m => (
            <a
              key={m.label}
              href={m.href}
              className="contact-card"
              style={{ '--card-color': m.color }}
            >
              <div className="contact-card-icon" style={{ background: `${m.color}20`, color: m.color }}>
                {m.icon}
              </div>
              <div className="contact-card-body">
                <span className="contact-card-label">{m.label}</span>
                <span className="contact-card-value">{m.value}</span>
                <span className="contact-card-sub">{m.sub}</span>
              </div>
              <div className="contact-card-arrow">→</div>
            </a>
          ))}
        </div>

        {/* CTA banner */}
        {/* <div className="contact-cta-banner ct-anim">
          <div className="contact-cta-left">
            <span className="contact-cta-eyebrow">🛒 Commander maintenant</span>
            <h3 className="contact-cta-title">
              Chips de Patate Douce & Ignames Surgelées
            </h3>
            <p className="contact-cta-desc">
              Disponibles en petits, moyens et grands formats. Livraison à domicile
              possible — contactez-nous pour en savoir plus.
            </p>
          </div>
          <div className="contact-cta-right">
            <a href="tel:+22890000000" className="contact-cta-btn">
              <span>📞</span>
              Appeler le 90 00 00 00
            </a>
            <a href="mailto:savoura.tg@gmail.com" className="contact-cta-btn contact-cta-btn--outline">
              <span>✉️</span>
              Envoyer un email
            </a>
          </div>
        </div> */}

        {/* Map / location placeholder */}
        {/* <div className="contact-location ct-anim">
          <div className="contact-location-icon">📍</div>
          <div>
            <p className="contact-location-title">Lomé, Togo</p>
            <p className="contact-location-sub">
              Produit fabriqué et conditionné avec soin au Togo · Livraison locale disponible
            </p>
          </div>
        </div> */}
      </div>
    </div>
  );
};

export default Contact;
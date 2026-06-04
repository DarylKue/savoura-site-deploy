import React, { useEffect, useRef } from 'react';
import './About.css';

const values = [
  {
    icon: '🌾',
    title: 'Réponse Économique',
    desc: 'Soutenir les agriculteurs togolais en créant des débouchés valorisants et stables pour leur production locale.',
    color: '#e8841a',
  },
  {
    icon: '🍃',
    title: 'Alternative Sanitaire',
    desc: 'Des produits sans conservateurs ni additifs, 100% naturels, comme alternative saine aux produits importés industriels.',
    color: '#4a7c2f',
  },
  {
    icon: '🌍',
    title: 'Souveraineté Alimentaire',
    desc: 'Prouver que consommer africain peut rimer avec modernité, qualité et fierté. Valoriser le local sur toute la chaîne.',
    color: '#3a2007',
  },
];

const stats = [
  { value: '100%', label: 'Produits locaux', sub: 'Cultivés au Togo' },
  { value: '0', label: 'Additifs', sub: 'Ni conservateurs' },
  { value: '4', label: 'Saveurs', sub: 'Chips de patate douce' },
  { value: '600g', label: 'Sachet ignames', sub: 'Famille & quotidien' },
];

const About = () => {
  const sectionRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      entries => entries.forEach(e => {
        if (e.isIntersecting) e.target.classList.add('visible');
      }),
      { threshold: 0.1 }
    );
    sectionRef.current?.querySelectorAll('.about-anim').forEach(el => observer.observe(el));
    return () => observer.disconnect();
  }, []);

  return (
    <div className="about-section" ref={sectionRef}>
      {/* Top wavy transition */}
      <div className="about-wave-top">
        <svg viewBox="0 0 1440 80" fill="none" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="none">
          <path d="M0 40C360 0 720 80 1440 40V0H0V40Z" fill="var(--cream)" />
        </svg>
      </div>

      <div className="container about-inner">
        {/* Header */}
        <div className="about-header about-anim">
          <span className="section-eyebrow">Notre Histoire</span>
          <h2 className="section-title" style={{ color: '#fff' }}>À Propos de Savoura</h2>
          <p className="about-intro">
            Savoura est une marque agroalimentaire togolaise qui valorise les richesses agricoles locales à travers des produits modernes, naturels et accessibles. En transformant la patate douce en chips aux saveurs authentiques et l’igname en produits surgelés prêts à l’emploi, Savoura offre une alternative locale de qualité aux produits importés. Notre vision est de soutenir les producteurs togolais, promouvoir la consommation locale et démontrer qu’innovation, praticité et fierté africaine peuvent se retrouver dans chaque bouchée
          </p>
        </div>

        {/* Stats row */}
        <div className="stats-row about-anim">
          {stats.map(s => (
            <div className="stat-card" key={s.label}>
              <span className="stat-value">{s.value}</span>
              <span className="stat-label">{s.label}</span>
              <span className="stat-sub">{s.sub}</span>
            </div>
          ))}
        </div>

        {/* Story block */}
        <div className="story-grid about-anim">
          <div className="story-text">
            <h3 className="story-heading">Le problème que nous résolvons</h3>
            <p>
              Au Togo comme dans de nombreux pays africains, le marché alimentaire est dominé par des produits
              importés — chips industrielles, pommes de terre congelées — souvent riches en additifs, au détriment
              des productions agricoles locales pourtant abondantes.
            </p>
            <p>
              La patate douce et l'igname, cultivées localement, sont sous-exploitées et peu transformées.
              Aucune offre locale structurée, moderne et compétitive ne répondait aux attentes du consommateur
              urbain d'aujourd'hui.
            </p>
            <h3 className="story-heading" style={{ marginTop: '24px' }}>Notre réponse</h3>
            <p>
              Savoura propose des chips de patate douce déclinées en quatre saveurs et des ignames surgelées
              prêtes à l'emploi. Une vision : transformer la perception du consommateur vis-à-vis du local,
              et démontrer que <strong>« consommer africain » peut rimer avec modernité, qualité et fierté.</strong>
            </p>
          </div>

          <div className="story-logo-side">
            <div className="about-logo-card">
              <img src="/images/logo.jpeg" alt="Savoura Logo" className="about-logo-img" />
              <div className="about-logo-text">
                <span className="about-brand-name">Savoura</span>
                <span className="about-brand-tagline">Le Goût Local Revisité</span>
              </div>
              <div className="about-logo-badges">
                <span className="badge badge-green">🌿 100% Togolais</span>
                <span className="badge badge-orange">🏆 Groupe 13 – Innov+</span>
              </div>
              <p className="about-project-note">
                Projet étudiant · 2025<br />
                Initiative de valorisation agricole locale
              </p>
            </div>
          </div>
        </div>

        {/* Values */}
        <div className="values-grid about-anim">
          {values.map(v => (
            <div className="value-card" key={v.title}>
              <div className="value-icon" style={{ background: `${v.color}20`, color: v.color }}>
                {v.icon}
              </div>
              <h4 className="value-title">{v.title}</h4>
              <p className="value-desc">{v.desc}</p>
            </div>
          ))}
        </div>

        {/* Market insight */}
        <div className="market-callout about-anim">
          <div className="market-callout-inner">
            <div className="market-stat">
              <span className="market-number">57,6%</span>
              <span className="market-desc">des répondants préfèrent la saveur Piment ou Nature</span>
            </div>
            <div className="market-divider" />
            <div className="market-stat">
              <span className="market-number">26–50</span>
              <span className="market-desc">ans — tranche d'âge la plus disposée à consommer Savoura</span>
            </div>
            <div className="market-divider" />
            <div className="market-stat">
              <span className="market-number">500–6000</span>
              <span className="market-desc">FCFA — plage de prix la plus acceptable selon notre enquête terrain</span>
            </div>
          </div>
        </div>

      </div>
    </div>
  );
};

export default About;

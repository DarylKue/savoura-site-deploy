import React, { useState, useEffect, useRef } from 'react';
import './Products.css';

const chipsVariants = [
  {
    flavor: 'Nature',
    color: '#5a8f3c',
    bgLight: '#edf5e5',
    price: 500,
    weight: '90g',
    description: 'Des chips croustillantes à base de patate douce locale, simplement assaisonnées pour révéler le vrai goût de la nature.',
    ingredients: 'Patate douce, huile végétale, sel.',
    emoji: '🍃',
    imgFace: '/images/Chips_Savoura_Nature_face_A5.webp',
    imgBack: '/images/Chips_Savoura_Nature_arriere_A5.webp',
  },
  {
    flavor: 'Oignon',
    color: '#7b4f9e',
    bgLight: '#f2eaf8',
    price: 500,
    weight: '90g',
    description: 'La douceur de la patate douce relevée par la saveur unique et aromatique de l\'oignon.',
    ingredients: 'Patate douce, huile végétale, oignon en poudre, sel.',
    emoji: '🧅',
    imgFace: '/images/Chips_Savoura_Oignon_face_A5.webp',
    imgBack: '/images/Chips_Savoura_Oignon_arriere_A5.webp',
  },
  {
    flavor: 'Piment',
    color: '#c0392b',
    bgLight: '#fceaea',
    price: 500,
    weight: '90g',
    description: 'Pour les amateurs de sensations fortes ! Des chips épicées qui éveillent les papilles.',
    ingredients: 'Patate douce, huile végétale, piment, sel.',
    emoji: '🌶️',
    imgFace: '/images/Chips_Savoura_Piment_face_A5.webp',
    imgBack: '/images/Chips_Savoura_Piment_arriere_A5.webp',
  },
  {
    flavor: 'Épices',
    color: '#e67e22',
    bgLight: '#fef3e6',
    price: 500,
    weight: '90g',
    description: 'Un mélange d\'épices africaines — gingembre, ail, poivre, paprika — pour une explosion de saveurs authentiques.',
    ingredients: 'Patate douce, huile végétale, gingembre, ail, paprika, poivre noir, sel.',
    emoji: '🫚',
    imgFace: '/images/Chips_Savoura_Epices_face_A5.webp',
    imgBack: '/images/Chips_Savoura_Epices_arriere_A5.webp',
  },
];

const formatPrices = [
  { label: 'Petit', desc: 'Consommation individuelle', price: 500 },
  { label: 'Moyen', desc: 'Usage quotidien', price: 1200 },
  { label: 'Grand', desc: 'Achats familiaux', price: 2500 },
];

const chipsFaces = [
  { label: 'Face avant', note: '100% Local · Sans conservateurs' },
  { label: 'Face arrière', note: 'Ingrédients & valeurs nutritionnelles' },
];

const ChipsCarousel = () => {
  const [active, setActive] = useState(0);
  const [face, setFace] = useState(0);
  const variant = chipsVariants[active];

  // Reset to face avant when flavor changes
  const handleFlavorChange = (i) => {
    setActive(i);
    setFace(0);
  };

  return (
    <div className="chips-carousel" style={{ '--accent': variant.color, '--accent-light': variant.bgLight }}>
      {/* Flavor selector tabs */}
      <div className="flavor-tabs">
        {chipsVariants.map((v, i) => (
          <button
            key={v.flavor}
            className={`flavor-tab ${i === active ? 'active' : ''}`}
            style={i === active ? { background: v.color, color: '#fff', borderColor: v.color } : {}}
            onClick={() => handleFlavorChange(i)}
          >
            <span className="flavor-emoji">{v.emoji}</span>
            {v.flavor}
          </button>
        ))}
      </div>

      {/* Card */}
      <div className="chips-card" key={active}>
        <div className="chips-card-left" style={{ background: variant.bgLight }}>
          {/* Face toggle — same pattern as ignames */}
          <div className="chips-face-tabs">
            {chipsFaces.map((f, i) => (
              <button
                key={i}
                className={`face-tab chips-face-tab ${i === face ? 'active' : ''}`}
                style={i === face ? { background: variant.color, boxShadow: `0 2px 8px ${variant.color}55` } : {}}
                onClick={() => setFace(i)}
              >
                {f.label}
              </button>
            ))}
          </div>

          <div className="chips-img-container">
            <img
              src={face === 0 ? variant.imgFace : variant.imgBack}
              alt={`Chips ${variant.flavor} — ${chipsFaces[face].label}`}
              className="chips-img-single"
            />
          </div>

          <p className="chips-face-note">{chipsFaces[face].note}</p>
        </div>

        <div className="chips-card-right">
          <div className="product-tag">Chips de Patate Douce</div>
          <h3 className="chips-flavor-title" style={{ color: variant.color }}>
            Saveur {variant.flavor}
          </h3>
          <p className="chips-desc">{variant.description}</p>

          <div className="chips-ingredients">
            <span className="ingr-label">Ingrédients</span>
            <span className="ingr-text">{variant.ingredients}</span>
          </div>

          <div className="product-badges-row">
            <span className="badge badge-green">✓ 100% Local</span>
            <span className="badge badge-green">✓ Sans Conservateurs</span>
            <span className="badge badge-green">✓ Sans Additifs</span>
          </div>

          <div className="price-formats">
            {formatPrices.map(f => (
              <div className="price-format-card" key={f.label}>
                <span className="pf-label">{f.label}</span>
                <span className="pf-desc">{f.desc}</span>
                <span className="pf-price" style={{ color: variant.color }}>
                  {f.price.toLocaleString()} FCFA
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Carousel arrows */}
      <div className="carousel-controls">
        <button
          className="carousel-btn"
          onClick={() => handleFlavorChange((active - 1 + chipsVariants.length) % chipsVariants.length)}
        >
          ←
        </button>
        <div className="carousel-dots">
          {chipsVariants.map((_, i) => (
            <button
              key={i}
              className={`dot ${i === active ? 'active' : ''}`}
              style={i === active ? { background: variant.color } : {}}
              onClick={() => handleFlavorChange(i)}
            />
          ))}
        </div>
        <button
          className="carousel-btn"
          onClick={() => handleFlavorChange((active + 1) % chipsVariants.length)}
        >
          →
        </button>
      </div>
    </div>
  );
};

const ignameFaces = [
  { label: 'Face avant', note: 'Sachet refermable · 600g' },
  { label: 'Face arrière', note: 'Mode de préparation & valeurs nutritionnelles' },
];

const ignameImages = [
  '/images/Image_surgelees_face_A5.webp',
  '/images/Image_surgelees_arriere_A5.webp',
];

const IgnamesCard = () => {
  const [face, setFace] = useState(0);
  const prep = [
    { icon: '🫕', method: 'À Bouillir', time: '12–15 min' },
    { icon: '🍳', method: 'À Cuire', time: '10–12 min' },
    { icon: '🥘', method: 'À Frire', time: '8–10 min' },
  ];
  const advantages = [
    'Prêtes à cuire, gain de temps',
    'Longue conservation à -18°C',
    'Zéro gaspillage alimentaire',
    'Compatible avec toutes cuisines',
  ];

  return (
    <div className="ignames-section">
      <div className="ignames-card">
        {/* Image side */}
        <div className="ignames-img-side">
          <div className="ignames-face-tabs">
            {ignameFaces.map((f, i) => (
              <button
                key={i}
                className={`face-tab ${i === face ? 'active' : ''}`}
                onClick={() => setFace(i)}
              >
                {f.label}
              </button>
            ))}
          </div>
          <div className="ignames-img-container">
            <img
              src={ignameImages[face]}
              alt={`Ignames Surgelées Savoura — ${ignameFaces[face].label}`}
              className="ignames-img-single"
            />
          </div>
          <p className="ignames-face-note">{ignameFaces[face].note}</p>
        </div>

        {/* Info side */}
        <div className="ignames-info-side">
          <div className="product-tag" style={{ background: 'rgba(74,124,47,0.1)', color: 'var(--green)' }}>
            Ignames Surgelées
          </div>
          <h3 className="ignames-title">Ignames Surgelées <span>Savoura</span></h3>
          <p className="ignames-tagline">
            "Le goût local revisité !"
          </p>
          <p className="ignames-desc">
            Savoura sélectionne pour vous les meilleures ignames locales et les transforme avec soin
            pour vous offrir un produit naturel, pratique et savoureux. 100% igname, sans additifs.
          </p>

          {/* Preparation methods */}
          <div className="prep-methods">
            {prep.map(p => (
              <div className="prep-item" key={p.method}>
                <span className="prep-icon">{p.icon}</span>
                <div>
                  <span className="prep-method">{p.method}</span>
                  <span className="prep-time">{p.time}</span>
                </div>
              </div>
            ))}
          </div>

          {/* Advantages */}
          <ul className="advantages-list">
            {advantages.map(a => (
              <li key={a}><span className="adv-check">✓</span> {a}</li>
            ))}
          </ul>

          <div className="product-badges-row" style={{ marginTop: '16px' }}>
            <span className="badge badge-green">Sans Additifs</span>
            <span className="badge badge-green">Produit Naturel</span>
            <span className="badge badge-green">Produit Local</span>
          </div>

          <div className="ignames-price-row">
            <div className="ignames-price">
              <span className="price-amount">1 500 FCFA</span>
              <span className="price-weight">· 600g</span>
            </div>
            <span className="conservation-note">❄️ À conserver à -18°C</span>
          </div>
        </div>
      </div>
    </div>
  );
};

const Products = () => {
  const sectionRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      entries => entries.forEach(e => {
        if (e.isIntersecting) e.target.classList.add('visible');
      }),
      { threshold: 0.1 }
    );
    sectionRef.current?.querySelectorAll('.anim').forEach(el => observer.observe(el));
    return () => observer.disconnect();
  }, []);

  return (
    <div className="products-section" ref={sectionRef}>
      <div className="container">
        <div className="section-header anim">
          {/* <span className="section-eyebrow">Notre Gamme</span> */}
          <h2 className="section-title">Notre gamme de Produits</h2>
          <p className="section-subtitle">
            Deux gammes pensées pour valoriser les saveurs africaines tout en répondant
            aux exigences de la vie moderne.
          </p>
        </div>

        {/* Chips */}
        <div className="product-block anim">
          <div className="product-block-header">
            <div className="product-number">01</div>
            <div>
              <h3 className="product-block-title">Chips de Patate Douce</h3>
              <p className="product-block-sub">4 saveurs · 100% Local · Sans conservateurs</p>
            </div>
          </div>
          <ChipsCarousel />
        </div>

        <div className="products-divider" />

        {/* Ignames */}
        <div className="product-block anim">
          <div className="product-block-header">
            <div className="product-number" style={{ background: 'var(--green)', color: '#fff' }}>02</div>
            <div>
              <h3 className="product-block-title">Ignames Surgelées</h3>
              <p className="product-block-sub">Prêtes à cuire · Produit Local · 600g</p>
            </div>
          </div>
          <IgnamesCard />
        </div>
      </div>
    </div>
  );
};

export default Products;

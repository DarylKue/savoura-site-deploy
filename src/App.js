import React, { useState, useEffect } from 'react';
import Navbar from './components/Navbar';
import Hero from './sections/Hero';
import Products from './sections/Products';
import About from './sections/About';
import Contact from './sections/Contact';
import Footer from './components/Footer';
import OrderModal from './components/OrderModal';
import './App.css';

function App() {
  const [activeSection, setActiveSection] = useState('accueil');
  const [showOrder, setShowOrder] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const sections = ['accueil', 'produits', 'apropos', 'contact'];
      const threshold = window.innerHeight * 0.4;
      let current = 'accueil';
      for (const id of sections) {
        const el = document.getElementById(id);
        if (el) {
          const rect = el.getBoundingClientRect();
          if (rect.top <= threshold) {
            current = id;
          }
        }
      }
      setActiveSection(current);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollTo = (id) => {
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: 'smooth', block: 'start' });
  };

  return (
    <div className="App">
      <Navbar activeSection={activeSection} onNavigate={scrollTo} onOrder={() => setShowOrder(true)} />
      <main>
        <section id="accueil"><Hero onNavigate={scrollTo} /></section>
        <section id="produits"><Products /></section>
        <section id="apropos"><About /></section>
        <section id="contact"><Contact /></section>
      </main>
      <Footer />
      {showOrder && <OrderModal onClose={() => setShowOrder(false)} />}
    </div>
  );
}

export default App;

import React, { useEffect } from 'react';
import ReactDOM from 'react-dom';
import '../sections/Products.css';

/* ── Modal de commande — monté sur document.body via portal ── */
const OrderModal = ({ onClose, accentColor }) => {
  useEffect(() => {
    const handleKey = (e) => { if (e.key === 'Escape') onClose(); };
    document.addEventListener('keydown', handleKey);
    document.body.style.overflow = 'hidden';
    return () => {
      document.removeEventListener('keydown', handleKey);
      document.body.style.overflow = '';
    };
  }, [onClose]);

  const modal = (
    <div className="order-modal-overlay" onClick={onClose}>
      <div
        className="order-modal"
        onClick={e => e.stopPropagation()}
        style={{ '--modal-accent': accentColor || 'var(--orange)' }}
      >
        <button className="order-modal-close" onClick={onClose} aria-label="Fermer">✕</button>

        <div className="order-modal-icon">🛒</div>
        <h3 className="order-modal-title">Commandez dès maintenant !</h3>
        <p className="order-modal-text">
          Pour passer une commande ou obtenir plus d'informations,
          contactez-nous directement :
        </p>

        <div className="order-modal-contacts">
          <a href="tel:+22897198815" className="order-contact-btn order-contact-phone">
            <span>📞</span>
            <div>
              <span className="ocb-label">Appelez-nous</span>
              <span className="ocb-value">+228 97 19 88 15</span>
            </div>
          </a>
          <a href="mailto:savoura@yahoo.fr" className="order-contact-btn order-contact-mail">
            <span>✉️</span>
            <div>
              <span className="ocb-label">Écrivez-nous</span>
              <span className="ocb-value">savoura@yahoo.fr</span>
            </div>
          </a>
        </div>

        <p className="order-modal-note">Nous répondons sous 24h · Lomé, Togo 🇹🇬</p>
      </div>
    </div>
  );

  return ReactDOM.createPortal(modal, document.body);
};

export default OrderModal;

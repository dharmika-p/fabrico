import React, { useState, useEffect } from 'react';
import './promopopup.css';

const PromoPopup = () => {
  const [showPopup, setShowPopup] = useState(false);

  useEffect(() => {
    const promoShownThisSession = sessionStorage.getItem('promoShown');

    if (!promoShownThisSession) {
      setShowPopup(true);
      sessionStorage.setItem('promoShown', 'true');
    } else {
      setShowPopup(false);
    }
  }, []);

  const handleClose = () => {
    setShowPopup(false);
  };

  const handleShopNow = () => {
    setShowPopup(false);
    window.location.href = '/';
  };

  if (!showPopup) return null;

  return (
    <div className="promo-popup">
      <div className="popup-content">
        <button onClick={handleClose} className="close-btn" aria-label="Close popup">×</button>
        <h2>🎁 Welcome to Fabrico!</h2>
        <p>Use code <strong>NEW20</strong> for 20% OFF</p>
        <button className="shop-btn" onClick={handleShopNow}>Shop Now</button>
      </div>
    </div>
  );
};

export default PromoPopup;



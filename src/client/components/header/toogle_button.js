import React, { useState, useEffect } from 'react';
import Header from '../../assets/css/header.module.css';

function ClientToogleButton() {
  const [isMenuActive, setIsMenuActive] = useState(
    localStorage.getItem("MenuIS") === "true"
  );

  // Sync from localStorage when events happen
  useEffect(() => {
    const handleStorageChange = () => {
      setIsMenuActive(localStorage.getItem("MenuIS") === "true");
    };

    window.addEventListener("storage", handleStorageChange);
    window.addEventListener("menuToggle", handleStorageChange);

    return () => {
      window.removeEventListener("storage", handleStorageChange);
      window.removeEventListener("menuToggle", handleStorageChange);
    };
  }, []);

  // Update localStorage whenever state changes
  useEffect(() => {
    localStorage.setItem("MenuIS", isMenuActive);
    window.dispatchEvent(new Event("menuToggle"));
  }, [isMenuActive]);

  const handleToggle = () => {
    setIsMenuActive(prev => !prev);
  };

  return (
    <button type="button" onClick={handleToggle} className={`${Header.uiTogglerMenusButton} ${isMenuActive ? Header.uiTogglerMenusActive : ""}`}>
      <span></span>
    </button>
  );
}

export default ClientToogleButton;

import React, { useEffect, useState } from 'react';
import Globle from '../assets/css/globle.module.css';
import { Outlet } from "react-router-dom";
import CookieConsent from '../components/cookie_consent';
import ClientHeader from '../components/header/header';
import ClientFooter from '../components/footer/footer';

function ClientMainLayout() {
  const [showscrolled, setShowscrolled] = useState(true);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 44) {
        setShowscrolled(false);
      } else {
        setShowscrolled(true);
      }
    };

    window.addEventListener('scroll', handleScroll);

    // Run once on mount to check initial position
    handleScroll();

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);
  return (
    <div className={Globle.uiBody}>
      <ClientHeader />
      {!showscrolled && <div className={Globle.uiHeaderCover}></div>}
      <Outlet />
      <ClientFooter />
      <CookieConsent />
    </div>
  )
}

export default ClientMainLayout;

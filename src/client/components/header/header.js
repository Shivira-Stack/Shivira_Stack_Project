import React, { useEffect, useState } from 'react';
import Header from '../../assets/css/header.module.css';
import ClientAnnouncementBar from './announcement_bar';
import ClientNavBar from './nav_bar';

function ClientHeader() {
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
    <header className={`${Header.uiHeader} ${showscrolled ? '' : Header.uiScrollActive}`}>
      {showscrolled && <ClientAnnouncementBar />}
      <ClientNavBar />
    </header>
  );
}

export default ClientHeader;

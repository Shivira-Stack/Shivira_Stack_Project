import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import Cookie from '../assets/css/cookieBar.module.css';

function CookieConsent() {
    const [showBanner, setShowBanner] = useState(false);

    useEffect(() => {
        const consent = localStorage.getItem("cookieConsent");
        if (!consent) {
            setShowBanner(true);
        } else if (consent === "accepted") {
            enableAnalytics();
        }
    }, []);

    const handleAccept = () => {
        localStorage.setItem("cookieConsent", "accepted");
        setShowBanner(false);
        enableAnalytics();
    };

    const handleReject = () => {
        localStorage.setItem("cookieConsent", "rejected");
        setShowBanner(false);
    };

    const enableAnalytics = () => {
        const gtmId = "GTM-KMM42R38"; // your GTM container ID
        if (document.getElementById("gtm-script")) return;

        const script = document.createElement("script");
        script.id = "gtm-script";
        script.innerHTML = `
          (function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
          new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
          j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
          'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
          })(window,document,'script','dataLayer','${gtmId}');
        `;
        document.head.appendChild(script);
    };

    // Animate CSS variable (--angle)
    useEffect(() => {
        let angle = 0;
        let frame;

        const animate = () => {
            angle = (angle + 1) % 360;
            document.documentElement.style.setProperty("--angle", `${angle}deg`);
            frame = requestAnimationFrame(animate);
        };

        frame = requestAnimationFrame(animate);
        return () => cancelAnimationFrame(frame);
    }, []);

    if (!showBanner) return null;

    return (
        <div className={Cookie.uiCookieBar}>
            <div className="container-fluid">
                <div className={Cookie.uiCookieContent}>
                    <p className={Cookie.uiCookieText}>
                        We use cookies to deliver an enhanced, personalized experience. 
                        You can read our <Link to="/privacy-policy">privacy policy</Link> for more information.
                    </p>
                    <div className={Cookie.uiCookieButtonGroup }>
                        <button type="button" className={`${Cookie.uiCookieButton} ${Cookie.uiCookieAccept}`} onClick={handleAccept}>Accept</button>
                        <button type="button" className={`${Cookie.uiCookieButton} ${Cookie.uiCookieReject}`} onClick={handleReject}>Reject</button>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default CookieConsent;

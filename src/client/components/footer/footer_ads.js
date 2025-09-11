import React from 'react';
import Footer from '../../assets/css/footer.module.css';
import { Link } from 'react-router-dom';
import { useMaintenanceMode } from "../../../utilities/maintenance_mode";

const clientPath = (path, isMaintenance) => isMaintenance ? `pages/${path}` : path;

function ClientFooterAds() {
    const [isMaintenance] = useMaintenanceMode();
    return (
        <div className={Footer.uiFooterAds}>
            <ul className={`nav flex-column ${Footer.uiNav}`}>
                <li className={`nav-item ${Footer.uiNavItem}`}>
                    <Link className={`nav-link ${Footer.uiNavLink }`} to={clientPath("contact_us", isMaintenance)}>
                        <img src='https://pixxelu.com/images/nav_icon/Revamp.png' alt='' />
                    </Link>
                </li>
                <li className={`nav-item ${Footer.uiNavItem}`}>
                    <Link className={`nav-link ${Footer.uiNavLink }`} to={clientPath("contact_us", isMaintenance)}>
                        <img src='https://pixxelu.com/images/nav_icon/idea.png' alt='' />
                    </Link>
                </li>
            </ul>
        </div>
    )
}

export default ClientFooterAds;

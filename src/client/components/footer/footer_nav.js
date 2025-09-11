import React from 'react';
import { Link } from 'react-router-dom';
import Footer from '../../assets/css/footer.module.css';
import { useMaintenanceMode } from "../../../utilities/maintenance_mode";

const clientPath = (path, isMaintenance) => isMaintenance ? `pages/${path}` : path;

function ClientFooterNav() {
    const [isMaintenance] = useMaintenanceMode();
    return (
        <>
            <div className='col-sm-6'>
                <div className={Footer.uiFooterNavContent}>
                    <h2 className={Footer.uiFooterNavTitel}>Company</h2>
                    <div className={Footer.uiFooterNav}>
                        <ul className={`nav flex-column ${Footer.uiNav}`}>
                            <li className={`nav-item ${Footer.uiNavItem}`}>
                                <Link className={`nav-link ${Footer.uiNavLink}`} to={clientPath("about_us", isMaintenance)}>About Us</Link>
                            </li>
                            <li className={`nav-item ${Footer.uiNavItem}`}>
                                <Link className={`nav-link ${Footer.uiNavLink}`} to={clientPath("portfolio", isMaintenance)}>Portfolio</Link>
                            </li>
                            <li className={`nav-item ${Footer.uiNavItem}`}>
                                <Link className={`nav-link ${Footer.uiNavLink}`} to={clientPath("blog", isMaintenance)}>Blog</Link>
                            </li>
                            <li className={`nav-item ${Footer.uiNavItem}`}>
                                <Link className={`nav-link ${Footer.uiNavLink}`} to={clientPath("careers", isMaintenance)}>Careers</Link>
                            </li>
                            <li className={`nav-item ${Footer.uiNavItem}`}>
                                <Link className={`nav-link ${Footer.uiNavLink}`} to={clientPath("faqs", isMaintenance)}>FAQ's</Link>
                            </li>
                            <li className={`nav-item ${Footer.uiNavItem}`}>
                                <Link className={`nav-link ${Footer.uiNavLink}`} to={clientPath("contact_us", isMaintenance)}>Contact Us</Link>
                            </li>
                            <li className={`nav-item ${Footer.uiNavItem}`}>
                                <Link className={`nav-link ${Footer.uiNavLink}`} to={clientPath("booking_appointment", isMaintenance)}>Appointment</Link>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
            <div className='col-sm-6'>
                <div className={Footer.uiFooterNavContent}>
                    <h2 className={Footer.uiFooterNavTitel}>Services</h2>
                    <div className={Footer.uiFooterNav}>
                        <ul className={`nav flex-column ${Footer.uiNav}`}>
                            <li className={`nav-item ${Footer.uiNavItem}`}>
                                <Link className={`nav-link ${Footer.uiNavLink}`} to={clientPath("services", isMaintenance)}>Hire Full-Stack developer</Link>
                            </li>
                            <li className={`nav-item ${Footer.uiNavItem}`}>
                                <Link className={`nav-link ${Footer.uiNavLink}`} to={clientPath("services", isMaintenance)}>Hire Full-Stack developer</Link>
                            </li>
                            <li className={`nav-item ${Footer.uiNavItem}`}>
                                <Link className={`nav-link ${Footer.uiNavLink}`} to={clientPath("services", isMaintenance)}>Hire Full-Stack developer</Link>
                            </li>
                            <li className={`nav-item ${Footer.uiNavItem}`}>
                                <Link className={`nav-link ${Footer.uiNavLink}`} to={clientPath("services", isMaintenance)}>Hire Full-Stack developer</Link>
                            </li>
                            <li className={`nav-item ${Footer.uiNavItem}`}>
                                <Link className={`nav-link ${Footer.uiNavLink}`} to={clientPath("services", isMaintenance)}>Hire Full-Stack developer</Link>
                            </li>
                            <li className={`nav-item ${Footer.uiNavItem}`}>
                                <Link className={`nav-link ${Footer.uiNavLink}`} to={clientPath("services", isMaintenance)}>Hire Full-Stack developer</Link>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </>
    )
}

export default ClientFooterNav;

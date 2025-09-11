import React from 'react';
import Header from '../../assets/css/header.module.css';
import { Link } from 'react-router-dom';

function ClientAnnouncementBar() {
    return (
        <div className={Header.uiAnnouncementBar}>
            <div className='container-fluid'>
                <div className='row'>
                    <div className='col-12'>
                        <div className={Header.uiAnnouncementContent}>
                            <div className={Header.uiAnnouncementOffer}>
                                <p className={Header.uiAnnouncementText}><b><a href='/'>We’re hiring!</a></b> Join our team and grow with us.</p>
                            </div>
                            <div className={Header.uiAnnouncementContact}>
                                <ul className={`nav ${Header.uiNav}`}>
                                    <li className={`nav-item ${Header.uiNavItem}`}>
                                        <Link className={`nav-link ${Header.uiNavLink}`} to="mailto:shivirastack@gmail.com" target='_blank'>
                                            <div className={Header.uiNavIcon}>
                                                <i className='fa-sharp fa-regular fa-envelope'></i>
                                            </div>
                                            <span className={Header.uiNavText}>shivirastack@gmail.com</span>
                                        </Link>
                                    </li>
                                    <li className={`nav-item ${Header.uiNavItem}`}>
                                        <Link className={`nav-link ${Header.uiNavLink}`} to="tel:+919805363015" target='_blank'>
                                            <div className={Header.uiNavIcon}>
                                                <i className='fa-sharp fa-regular fa-phone'></i>
                                            </div>
                                            <span className={Header.uiNavText}>+91-9805363015</span>
                                        </Link>
                                    </li>
                                    <li className={`nav-item ${Header.uiNavItem}`}>
                                        <ul className={`nav ${Header.uiNavSocial}`}>
                                            <li className={`nav-item ${Header.uiNavItem}`}>
                                                <Link className={`nav-link ${Header.uiNavLink}`} to="/" target='_blank'>
                                                    <span className={Header.uiNavText}>FB</span>
                                                </Link>
                                            </li>
                                            <li className={`nav-item ${Header.uiNavItem}`}>
                                                <Link className={`nav-link ${Header.uiNavLink}`} to="/" target='_blank'>
                                                    <span className={Header.uiNavText}>LI</span>
                                                </Link>
                                            </li>
                                            <li className={`nav-item ${Header.uiNavItem}`}>
                                                <Link className={`nav-link ${Header.uiNavLink}`} to="/" target='_blank'>
                                                    <span className={Header.uiNavText}>BE</span>
                                                </Link>
                                            </li>
                                            <li className={`nav-item ${Header.uiNavItem}`}>
                                                <Link className={`nav-link ${Header.uiNavLink}`} to="/" target='_blank'>
                                                    <span className={Header.uiNavText}>DR</span>
                                                </Link>
                                            </li>
                                        </ul>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ClientAnnouncementBar;

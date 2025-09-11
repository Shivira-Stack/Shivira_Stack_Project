import React from 'react';
import Footer from '../../assets/css/footer.module.css';
import { Link } from 'react-router-dom';

function ClientFooterSocial() {
    return (
        <div className={Footer.uiFooterSocial}>
            <ul className={`nav ${Footer.uiNav}`}>
                <li className={`nav-item ${Footer.uiNavItem}`}>
                    <Link className={`nav-link ${Footer.uiNavLink}`} to="/" target='_blank'>
                        <i className='fa-brands fa-facebook-f'></i>
                    </Link>
                </li>
                <li className={`nav-item ${Footer.uiNavItem}`}>
                    <Link className={`nav-link ${Footer.uiNavLink}`} to="/" target='_blank'>
                        <i className='fa-brands fa-linkedin-in'></i>
                    </Link>
                </li>
                <li className={`nav-item ${Footer.uiNavItem}`}>
                    <Link className={`nav-link ${Footer.uiNavLink}`} to="/" target='_blank'>
                        <i className='fa-brands fa-behance'></i>
                    </Link>
                </li>
                <li className={`nav-item ${Footer.uiNavItem}`}>
                    <Link className={`nav-link ${Footer.uiNavLink}`} to="/" target='_blank'>
                        <i className='fa-brands fa-dribbble'></i>
                    </Link>
                </li>
            </ul>
        </div>
    )
}

export default ClientFooterSocial;

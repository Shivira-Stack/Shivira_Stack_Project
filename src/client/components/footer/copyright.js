import React from 'react';
import Footer from '../../assets/css/footer.module.css';
import { Link } from 'react-router-dom';
import { useMaintenanceMode } from "../../../utilities/maintenance_mode";

const clientPath = (path, isMaintenance) => isMaintenance ? `pages/${path}` : path;

function ClientCopyRight() {
    const [isMaintenance] = useMaintenanceMode();
    const currentYear = new Date().getFullYear();
    return (
        <div className={Footer.uiFooterCopyright}>
            <div className={Footer.uiCopyrightWrap}>
                <div className={Footer.uiCopyrightContact}>
                    <h6>HAVE YOU GOT A QUESTION?</h6>
                    <span><Link to='mailto:shivirastack@gmail.com' target='_blank'>shivirastack@gmail.com</Link></span>
                </div>
                <div className={Footer.uiCopyrightNav}>
                    <ul className={`nav ${Footer.uiNav}`}>
                        <li className={`nav-item ${Footer.uiNavItem}`}>
                            <Link className={`nav-link ${Footer.uiNavLink}`} to={clientPath("terms", isMaintenance)}>Terms</Link>
                        </li>
                        <li className={`nav-item ${Footer.uiNavItem}`}>
                            <Link className={`nav-link ${Footer.uiNavLink}`} to={clientPath("policy", isMaintenance)}>Policy</Link>
                        </li>
                        <li className={`nav-item ${Footer.uiNavItem}`}>
                            <Link className={`nav-link ${Footer.uiNavLink}`} to={clientPath("refund", isMaintenance)}>Refund</Link>
                        </li>
                        <li className={`nav-item ${Footer.uiNavItem}`}>
                            <span>© {currentYear} <Link to='/'>Shivira Stack</Link>. All Rights Reserved.</span>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    )
}

export default ClientCopyRight;

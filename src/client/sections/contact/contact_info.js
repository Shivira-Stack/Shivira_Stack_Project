import React from 'react';
import { Link } from 'react-router-dom';
import Globle from '../../assets/css/globle.module.css';
import Contactinfo from'../../assets/css/contact.module.css';

function ClientContactInfo() {
    return (
        <div className='col-lg-5'>
            <div className={Contactinfo.uiSectionContactInfo}>
                <div className={Globle.uiCard}>
                    <div className={Globle.uiCardBody}>
                        <h3 className={Contactinfo.uiTitle}>Contact Information</h3>
                        <p className={Contactinfo.uiDesc}>Say something to start a live chat!</p>
                        <div className={Contactinfo.uiContactInfo}>
                            <h5 className={Contactinfo.uiInfoTitle}>Call</h5>
                            <p className={Contactinfo.uiInfoText}><Link to='tel:+91-9805363015' target='_blank'>+91-9805363015</Link></p>
                        </div>
                        <div className={Contactinfo.uiContactInfo}>
                            <h5 className={Contactinfo.uiInfoTitle}>Mail Us</h5>
                            <p className={Contactinfo.uiInfoText}><Link to='mailto:shivirastack@gmail.com' target='_blank'>shivirastack@gmail.com</Link></p>
                        </div>
                        <div className={Contactinfo.uiContactInfo}>
                            <h5 className={Contactinfo.uiInfoTitle}>Location</h5>
                            <address className={Contactinfo.uiInfoText}>Building 143/1, Nandher, Near Old Mator, Kangra, Himachal Pradesh 176001</address>
                        </div>
                        <div className={Contactinfo.uiContactSocial}>
                            <ul className={`nav ${Contactinfo.uiNav}`}>
                                <li className={`nav-item ${Contactinfo.uiNavItem}`}>
                                    <Link className={`nav-link ${Contactinfo.uiNavLink}`} to="/" target='_blank'>
                                        <i className='fa-brands fa-facebook-f'></i>
                                    </Link>
                                </li>
                                <li className={`nav-item ${Contactinfo.uiNavItem}`}>
                                    <Link className={`nav-link ${Contactinfo.uiNavLink}`} to="/" target='_blank'>
                                        <i className='fa-brands fa-linkedin-in'></i>
                                    </Link>
                                </li>
                                <li className={`nav-item ${Contactinfo.uiNavItem}`}>
                                    <Link className={`nav-link ${Contactinfo.uiNavLink}`} to="/" target='_blank'>
                                        <i className='fa-brands fa-behance'></i>
                                    </Link>
                                </li>
                                <li className={`nav-item ${Contactinfo.uiNavItem}`}>
                                    <Link className={`nav-link ${Contactinfo.uiNavLink}`} to="/" target='_blank'>
                                        <i className='fa-brands fa-dribbble'></i>
                                    </Link>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ClientContactInfo;

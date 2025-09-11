import React from 'react';
import Globle from '../../assets/css/globle.module.css';
import Map from '../../assets/css/contact.module.css';
import { Link } from 'react-router-dom';


function ClientMap() {
    return (
        <section className={`${Globle.uiSection} pt-0`}>
            <div className='container'>
                <div className={Map.uiMapContent}>
                    <div className={Map.uiMapInfo}>
                        <div className={Map.uiMapCard}>
                            <div className={Map.uiMapCardBody}>
                                <h3 className={Map.uiTitle}>Getting Here</h3>
                                <div className={Map.uiMapContact}>
                                    <ul className={`nav ${Map.uiNav}`}>
                                        <li className={`nav-item ${Map.uiNavItem}`}>
                                            <div className={Map.uiMapListContent}>
                                                <div className={Map.uiMapListIcon}>
                                                    <i className="fa-sharp fa-solid fa-location-dot"></i>
                                                </div>
                                                <div className={Map.uiMapListInfo}>
                                                    <address className={Map.uiMaptext}>Building 143/1, Nandher, Near Old Mator, Kangra, Himachal Pradesh 176001</address>
                                                </div>
                                            </div>
                                        </li>
                                        <li className={`nav-item ${Map.uiNavItem}`}>
                                            <div className={Map.uiMapListContent}>
                                                <div className={Map.uiMapListIcon}>
                                                    <i className="fa-sharp fa-solid fa-bolt-lightning"></i>
                                                </div>
                                                <div className={Map.uiMapListInfo}>
                                                    <span className={Map.uiMaptext}>10 min walk from Old Matour</span>
                                                    <span className={Map.uiMapSmallText}>Near by Ashoka Factory</span>
                                                </div>
                                            </div>
                                        </li>
                                    </ul>
                                </div>
                                <Link className={`${Globle.uiPrimaryBtn} ${Map.uiPrimaryBtn}`} to="https://www.google.com/maps?gs_lcrp=EgZjaHJvbWUqCAgAEEUYJxg7MggIABBFGCcYOzIKCAEQABixAxiABDIKCAIQLhixAxiABDIHCAMQLhiABDIGCAQQABgDMgYIBRBFGDwyBggGEEUYPDIGCAcQRRg90gEIMzA5NWowajSoAgCwAgE&um=1&ie=UTF-8&fb=1&gl=in&sa=X&geocode=KXfVEK6DTxs5MaRCXxv3jVic&daddr=Nandher,+Kangra,+Patrakar,+Himachal+Pradesh+176001" target='_blank'>
                                    <div className={Globle.uiBtnInner}>
                                        <span className={`${Globle.uiBtnIcon} ${Globle.uiHideIcon}`}>
                                            <i className="fa-sharp fa-solid fa-arrow-right"></i>
                                        </span>
                                        <span className={Globle.uiBtnText}>Get Directions</span>
                                        <span className={Globle.uiBtnIcon}>
                                            <i className="fa-sharp fa-solid fa-arrow-right"></i>
                                        </span>
                                    </div>
                                </Link>
                            </div>
                        </div>
                    </div>
                    <div className={Map.uiSection}>
                        <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3378.593809624826!2d76.28528997543212!3d32.13427037393883!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x391b4f83ae10d577%3A0x9c588df71b5f42a4!2sKuzh%20Pixel!5e0!3m2!1sen!2sin!4v1756378822178!5m2!1sen!2sin&z=19" allowFullScreen="" loading="lazy" referrerpolicy="referrerPolicy"></iframe>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default ClientMap;

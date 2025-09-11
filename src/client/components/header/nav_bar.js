import React, { useState, useEffect } from 'react';
import Globle from '../../assets/css/globle.module.css';
import Header from '../../assets/css/header.module.css';
import { Link } from 'react-router-dom';
import BrandLogo from '../../assets/images/Shivira_Stack_Logo.svg';
import ClientToogleButton from './toogle_button';
import ClientDesktopMenu from './desktop_menu';
import ClientMobileMenu from './mobile_menu';

function ClientNavBar() {
    const [isMobile, setIsMobile] = useState(window.innerWidth <= 1140);

    useEffect(() => {
        const handleResize = () => {
            setIsMobile(window.innerWidth <= 1140);
        };

        window.addEventListener("resize", handleResize);
        return () => window.removeEventListener("resize", handleResize);
    }, []);
    return (
        <>
            <div className={Header.uiMainMenus}>
                <div className='container-fluid'>
                    <div className='row'>
                        <div className='col-12'>
                            <div className={Header.uiHeaderContent}>
                                <div className={Header.uiBrandContent}>
                                    <Link to="/" className={Header.uiBrandLogo}>
                                        <img src={BrandLogo} alt='Shivira_Stack' />
                                    </Link>
                                </div>
                                {!isMobile && <ClientDesktopMenu />}
                                <div className={Header.uiActionContent}>
                                    <Link to='/pages/contact_us' className={`${Globle.uiPrimaryBtn} ${Header.uiPrimaryBtn}`}>
                                        <div className={Globle.uiBtnInner}>
                                            <span className={`${Globle.uiBtnIcon} ${Globle.uiHideIcon}`}><i className="fa-sharp fa-solid fa-arrow-right"></i></span>
                                            <span className={Globle.uiBtnText}>Get In Touch</span>
                                            <span className={Globle.uiBtnIcon}><i className="fa-sharp fa-solid fa-arrow-right"></i></span>
                                        </div>
                                    </Link>
                                    {isMobile && <ClientToogleButton />}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            {isMobile && <ClientMobileMenu />}
        </>
    )
}

export default ClientNavBar;

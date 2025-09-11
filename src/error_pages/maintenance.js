import React from 'react';
import Globle from '../client/assets/css/globle.module.css';
import ErrorPages from '../client/assets/css/errorPage.module.css';
import SiteMaintenance from '../client/assets/images/Site_Maintenance.svg';
import { Link } from 'react-router-dom';

function ClientMaintenance() {
    return (
        <div className={ErrorPages.uiErrorPage}>
            <img src={SiteMaintenance} alt='503_Maintenance' className={ErrorPages.uiThumbnail} />
            <h1 className={ErrorPages.uiTitle}>Sorry! We Are Under Scheduled Maintenance</h1>
            <p className={ErrorPages.uiText}>Our website is currently undergoing scheduled maintenance, will be right back soon.<br />Thank you for your patience.</p>
            <Link to='/auth' className={`${ErrorPages.uiPrimaryBtn} ${Globle.uiPrimaryBtn}`}>
                <div className={Globle.uiBtnInner}>
                    <span className={`${Globle.uiBtnIcon} ${Globle.uiHideIcon}`}><i className="fa-sharp fa-solid fa-arrow-right"></i></span>
                    <span className={Globle.uiBtnText}>Go To Admin</span>
                    <span className={Globle.uiBtnIcon}><i className="fa-sharp fa-solid fa-arrow-right"></i></span>
                </div>
            </Link>
        </div>
    )
}

export default ClientMaintenance;

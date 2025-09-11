import React from 'react';
import { useNavigate } from "react-router-dom";
import Globle from '../client/assets/css/globle.module.css';
import ErrorPages from '../client/assets/css/errorPage.module.css';
import GatewayTimeout from '../client/assets/images/Gateway_Timeout.svg';

function ClientGatewayTimeout() {
  const navigate = useNavigate();
    return (
        <div className={ErrorPages.uiErrorPage}>
            <img src={GatewayTimeout} alt='503_Maintenance' className={ErrorPages.uiThumbnail} />
            <h1 className={ErrorPages.uiTitle}>This Page Does Not Exist</h1>
            <p className={ErrorPages.uiText}>Sorry, the page you are looking for could not be found. It's just an accident that was not intentional.</p>
            <button onClick={() => navigate(-1)} className={`${ErrorPages.uiPrimaryBtn} ${Globle.uiPrimaryBtn}`}>
                <div className={Globle.uiBtnInner}>
                    <span className={`${Globle.uiBtnIcon} ${Globle.uiHideIcon}`}><i className="fa-sharp fa-solid fa-arrow-right"></i></span>
                    <span className={Globle.uiBtnText}>Go To Back</span>
                    <span className={Globle.uiBtnIcon}><i className="fa-sharp fa-solid fa-arrow-right"></i></span>
                </div>
            </button>
        </div>
    )
}

export default ClientGatewayTimeout;

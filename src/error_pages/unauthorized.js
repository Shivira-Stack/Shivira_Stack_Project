import React from 'react';
import { useNavigate, useLocation } from "react-router-dom";
import Globle from '../client/assets/css/globle.module.css';
import ErrorPages from '../client/assets/css/errorPage.module.css';
import Unauthorized from '../client/assets/images/Unauthorized.svg';
import { useMaintenanceMode } from '../utilities/maintenance_mode';

const clientPath = (path, isMaintenance) => (isMaintenance ? `pages/${path}` : path);

function ClientUnauthorized() {
  const navigate = useNavigate();
  const location = useLocation();
  const isMaintenance = useMaintenanceMode();

  // ✅ Read from location.state
  const { title, desc, buttonPath, buttonName } = location.state || {
    title: "Unauthorized",
    desc: "You are not allowed to access this page.",
    buttonPath: "/",
    buttonName: "Go To Home",
  };

  return (
    <div className={ErrorPages.uiErrorPage}>
      <img src={Unauthorized} alt="Unauthorized" className={ErrorPages.uiThumbnail} />
      <h1 className={ErrorPages.uiTitle}>{title}</h1>
      <p className={ErrorPages.uiText}>{desc}</p>
      <button
        onClick={() => navigate(clientPath(buttonPath, isMaintenance))}
        className={`${ErrorPages.uiPrimaryBtn} ${Globle.uiPrimaryBtn}`}
      >
        <div className={Globle.uiBtnInner}>
          <span className={`${Globle.uiBtnIcon} ${Globle.uiHideIcon}`}>
            <i className="fa-sharp fa-solid fa-arrow-right"></i>
          </span>
          <span className={Globle.uiBtnText}>{buttonName}</span>
          <span className={Globle.uiBtnIcon}>
            <i className="fa-sharp fa-solid fa-arrow-right"></i>
          </span>
        </div>
      </button>
    </div>
  );
}

export default ClientUnauthorized;

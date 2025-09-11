import React from 'react';
import UI from'../client/assets/css/preloder.module.css';
import backgroundImage from '../client/assets/images/Preloader_Background.png';
import Icon from '../client/assets/images/preloader_Shivira_Icon.png';
import Circle from '../client/assets/images/Preloader_Shivira_Circle.png';

function ClientPreloder() {
  return (
    <div className={UI.uiWrap} style={{ backgroundImage : `url(${backgroundImage})` }}>
      <div className={UI.uiContent}>
        <div className={UI.uiCircle}>
            <img src={Circle} alt='Shivira_Circle' />
        </div>
        <div className={UI.uiIcon}>
            <img src={Icon} alt='Shivira_Icon' />
        </div>
      </div>
    </div>
  )
}

export default ClientPreloder;

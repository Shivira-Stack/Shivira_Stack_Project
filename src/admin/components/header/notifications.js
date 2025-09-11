import React from 'react';
import Header from '../../assets/css/header.module.css';

function AdminNotifications() {
    return (
        <div classMane={`${Header.uiPopWrap}`}>
            <button type="button" className={`${Header.uiHeaderButton}`}>
                <i className="fa-duotone fa-regular fa-bell"></i>
                <span className={`${Header.uiHeaderButtonStatus} ${Header.uiHeaderStatusActive}`}></span>
            </button>
            <div className={`${Header.uiHeaderPop}`}>

            </div>
        </div>
    )
}

export default AdminNotifications;

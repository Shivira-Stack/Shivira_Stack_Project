import React from 'react';
import Header from '../../assets/css/header.module.css';

function AdminInbox() {
    return (
        <div classMane={`${Header.uiPopWrap}`}>
            <button type="button" className={`${Header.uiHeaderButton}`}>
                <i className="fa-duotone fa-regular fa-envelope"></i>
                <span className={`${Header.uiHeaderButtonStatus}`}></span>
            </button>
            <div className={`${Header.uiHeaderPop}`}>

            </div>
        </div>
    )
}

export default AdminInbox;

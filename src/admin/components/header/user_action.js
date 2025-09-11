import React from 'react';
import Header from '../../assets/css/header.module.css';

function AdminUserAction() {
    return (
        <div classMane={`${Header.uiPopWrap}`}>
            <button type="button" className={`${Header.uiHeaderButton} ${Header.uiHeaderUserButton}`}>
                {/* <span>AK</span> */}
                <img src='https://ecme-next.themenate.net/img/avatars/thumb-1.jpg' alt='' />
            </button>
            <div className={`${Header.uiHeaderPop}`}>

            </div>
        </div>
    )
}

export default AdminUserAction;

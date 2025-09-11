import React from 'react';
import { Link, Outlet } from 'react-router-dom';
import Globle from '../assets/css/globle.module.css';
import Auth from '../assets/css/auth.module.css';
import Brand from '../../client/assets/images/Shivira_Stack_Logo.svg';
import AdminAlert from '../components/utilities/alert/alert';

function AdminAuthLayout() {
  return (
    <div className={Globle.uiBodyWrap}>
      <div className={Auth.uiAuthWrap} style={{ backgroundImage: `url('https://img.freepik.com/free-vector/crystal-textured-background-illustration_53876-81310.jpg?t=st=1756647721~exp=1756651321~hmac=567d5417d1c9d55040f72637c5618eacf7cb6d1580028eaba7cd58e5ed67a17f&w=1480')` }}>
        <div className={Auth.uiAuthContent}>
          <div className={Auth.uiAuthFormWrap}>
            <div className={Auth.uiAuthCard}>
              <div className={Auth.uiAuthCardBody}>
                <div className={Auth.uiAuthBrand}>
                  <Link to='/auth'>
                    <img src={Brand} alt='Shivira Stack' />
                  </Link>
                </div>
                <Outlet />
              </div>
            </div>
          </div>
        </div>
      </div>
      <AdminAlert />
    </div>
  )
}

export default AdminAuthLayout;

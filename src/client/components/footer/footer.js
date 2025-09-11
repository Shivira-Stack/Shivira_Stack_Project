import React from 'react';
import ClientCopyRight from './copyright';
import ClientFooterInfo from './footer_info';
import ClientFooterNav from './footer_nav';
import ClientFooterAds from './footer_ads';
import ClientFooterSocial from './footer_social';
import Footer from '../../assets/css/footer.module.css';


function ClientFooter() {
  return (
    <footer className={Footer.uiFooter}>
      <div className='container-lg'>
        <div className={Footer.uiFooterMenus}>
          <div className='row'>
            <ClientFooterInfo />
            <div className='col-lg-5 col-md-7'>
              <div className='row'>
                <ClientFooterNav />
              </div>
            </div>
            <div className='col-lg-3 col-sm-5 col-10'>
              <div className={Footer.uiFooterNavContent}>
                <h2 className={Footer.uiFooterNavTitel}>Stay Connected</h2>
                <ClientFooterAds />
                <ClientFooterSocial />
              </div>
            </div>
          </div>
        </div>
        <ClientCopyRight />
      </div>
    </footer>
  )
}

export default ClientFooter;

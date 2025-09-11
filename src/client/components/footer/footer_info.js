import React from 'react';
import { Link } from 'react-router-dom';
import Footer from '../../assets/css/footer.module.css';
import BrandLogo from '../../assets/images/Shivira_Stack_Logo.svg';

function ClientFooterInfo() {
    return (
        <div className='col-lg-4 col-md-5'>
            <div className={Footer.uiFooterInfoContent}>
                <div className={Footer.uiBrandContent}>
                    <Link to='/' className={Footer.uiBrandLogo}>
                        <img src={BrandLogo} alt='Shivira_Stack_Logo' />
                    </Link>
                </div>
                <div className={Footer.uiFooterDesc}>
                    <p>We build innovative digital solutions that help businesses grow. Our team delivers web, mobile, and branding services with a focus on quality and trust.</p>
                </div>
                <div className={Footer.uiFooterContactInfo}>
                    <h5>Call</h5>
                    <p><Link to='tel:+9805363015' target='_blank'>+91-9805363015</Link></p>
                </div>
                <div className={Footer.uiFooterContactInfo}>
                    <h5>Mail Us</h5>
                    <p><Link to='mailto:shivirastack@gmail.com' target='_blank'>shivirastack@gmail.com</Link></p>
                </div>
                <div className={Footer.uiFooterContactInfo}>
                    <h5>Location</h5>
                    <address>Building 143/1, Nandher, Near Old Mator, Kangra, Himachal Pradesh 176001</address>
                </div>
            </div>
        </div>
    )
}

export default ClientFooterInfo;

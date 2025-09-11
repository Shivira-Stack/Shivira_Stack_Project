import React from 'react';
import Globle from '../assets/css/globle.module.css'
import Contact from '../assets/css/contact.module.css'
import ClientBreadcrumb from '../components/breadcrumb';
import ClientContactInfo from '../sections/contact/contact_info';
import ClientContactForm from '../sections/contact/contact_form';
import ClientMap from '../sections/contact/map';

function ClientContact() {
    return (
        <>
            <ClientBreadcrumb />
            <section className={Globle.uiSection}>
                <div className='container'>
                    <div className={`${Globle.uiSectionCard} ${Contact.uiSectionCard}`}>
                        <div className={`${Globle.uiSectionCardBody} ${Contact.uiSectionCardBody}`}>
                            <div className='row'>
                                <ClientContactInfo />
                                <ClientContactForm />
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <ClientMap />
        </>
    )
}

export default ClientContact;

import React from 'react';
import Globle from '../assets/css/globle.module.css';
import ClientBreadcrumb from '../components/breadcrumb';
import ClientBooking from '../sections/booking_appointment/booking';

function ClientBookingAppointment() {
  return (
    <>
      <ClientBreadcrumb />
      <section className={Globle.uiSection}>
        <div className="container-fluid">
          <div className="row justify-content-center">
            <div className="col-md-8">
              <div className={`${Globle.uiSectionHeader} text-center`}>
                <h2 className={Globle.uiSectionTitle}>Book an Appointment</h2>
                <p className={Globle.uiSectionDesc}>Schedule your appointment quickly and easily with our online booking system.<br/>Choose a convenient time and get started today.</p>
              </div>
            </div>
          </div>
          <ClientBooking />
        </div>
      </section>
    </>
  );
}

export default ClientBookingAppointment;

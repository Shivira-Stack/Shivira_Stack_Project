import React, { useState } from "react";
import Globle from '../../assets/css/globle.module.css';
import ContactForm from '../../assets/css/contact.module.css';
import ClientReactSelect from "../../components/react_select";
import MyReCAPTCHA from "../../../utilities/ReCAPTCHA";

const ServicesOptions = [
    { value: "web", label: "Web Development" },
    { value: "app", label: "App Development" },
    { value: "seo", label: "SEO Optimization" },
];

const BudgetOptions = [
    { value: "500", label: "Less than $500" },
    { value: "1000", label: "$500 - $1000" },
    { value: "2000", label: "$1000 - $2000" },
    { value: "custom", label: "Custom Budget" },
]

function ClientContactForm() {
    const [selectedServices, setSelectedServices] = useState([]);
    const [selectedBudget, setSelectedBudget] = useState(null);
    const [captchaValue, setCaptchaValue] = useState(null);


    const handleSubmit = (e) => {
        e.preventDefault();
        if (!captchaValue) {
            alert("Please verify you are not a robot!");
            return;
        }
        console.log("Form submitted with captcha:", captchaValue);
        // later send to backend
    };
    return (
        <div className='col-lg-7'>
            <form className={ContactForm.uiSectionContactForm} onSubmit={handleSubmit}>
                <h3 className={ContactForm.uiTitle}>Send Us a Message</h3>
                <p className={ContactForm.uiDesc}>Say something to start a live chat!</p>
                <div className='row'>
                    <div className='col-md-6'>
                        <div className={Globle.uiFormContent}>
                            <label htmlFor="firstName" className={`form-label ${Globle.uiFormLabel}`}>First Name<span>(required)</span></label>
                            <input type="text" className={`form-control ${Globle.uiFormControl}`} id="firstName" placeholder="John" required />
                        </div>
                    </div>
                    <div className='col-md-6'>
                        <div className={Globle.uiFormContent}>
                            <label htmlFor="LastName" className={`form-label ${Globle.uiFormLabel}`}>Last Name</label>
                            <input type="text" className={`form-control ${Globle.uiFormControl}`} id="LastName" placeholder="Smith" />
                        </div>
                    </div>
                    <div className='col-md-6'>
                        <div className={Globle.uiFormContent}>
                            <label htmlFor="phone" className={`form-label ${Globle.uiFormLabel}`}>Phone Number<span>(required)</span></label>
                            <input type="text" className={`form-control ${Globle.uiFormControl}`} id="phone" placeholder="+919876543210" required />
                        </div>
                    </div>
                    <div className='col-md-6'>
                        <div className={Globle.uiFormContent}>
                            <label htmlFor="email" className={`form-label ${Globle.uiFormLabel}`}>Email<span>(required)</span></label>
                            <input type="email" className={`form-control ${Globle.uiFormControl}`} id="email" placeholder="jhonsmith@mail.com" required />
                        </div>
                    </div>
                    <div className='col-md-6'>
                        <div className={Globle.uiFormContent}>
                            <label htmlFor="services" className={`form-label ${Globle.uiFormLabel}`}>Service<span>(required)</span></label>
                            <ClientReactSelect
                                id="services"
                                options={ServicesOptions}
                                isMulti={true}
                                value={selectedServices}
                                placeholder="Select Services..."
                                onChange={(val) => setSelectedServices(val)}
                                isClearable={false}
                                required
                            />
                        </div>
                    </div>
                    <div className='col-md-6'>
                        <div className={Globle.uiFormContent}>
                            <label htmlFor="budget" className={`form-label ${Globle.uiFormLabel}`}>Budget<span>(required)</span></label>
                            <ClientReactSelect
                                id="budget"
                                options={BudgetOptions}
                                isMulti={false}
                                value={selectedBudget}
                                placeholder="Select your budget..."
                                onChange={(val) => setSelectedBudget(val)}
                                isClearable={true}
                                required
                            />
                        </div>
                    </div>
                    <div className='col-md-12'>
                        <div className={Globle.uiFormContent}>
                            <label htmlFor="message" className={`form-label ${Globle.uiFormLabel}`}>Message<span>(required)</span></label>
                            <textarea className={`form-control ${Globle.uiFormControl}`} id="message" placeholder="Your message here..." required />
                        </div>
                    </div>
                    <div className='col-md-12'>
                        <div className={`${Globle.uiFormContent} ${ContactForm.uiReChaptcha}`}>
                            <MyReCAPTCHA Verify={(value) => setCaptchaValue(value)} />
                        </div>
                    </div>
                    <div className='col-md-12'>
                        <button type='submit' className={`${Globle.uiPrimaryBtn} ${ContactForm.uiPrimaryBtn}`}>
                            <div className={Globle.uiBtnInner}>
                                <span className={`${Globle.uiBtnIcon} ${Globle.uiHideIcon}`}><i className="fa-sharp fa-solid fa-paper-plane-top"></i></span>
                                <span className={Globle.uiBtnText}>Send Message</span>
                                <span className={Globle.uiBtnIcon}><i className="fa-sharp fa-solid fa-paper-plane-top"></i></span>
                            </div>
                        </button>
                    </div>
                </div>
            </form>
        </div>
    )
}

export default ClientContactForm;

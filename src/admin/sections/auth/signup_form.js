import React, { useState } from 'react';
import { useNavigate } from "react-router-dom";
import Globle from "../../assets/css/globle.module.css";
import Auth from "../../assets/css/auth.module.css";
import MyReCAPTCHA from '../../../utilities/ReCAPTCHA';
import { useForm } from "react-hook-form";
import FormControl from "../../components/utilities/form_control";
import { sendAlert } from "../../components/utilities/alert/alert_data";
import axios from "axios";

const API_URL = process.env.REACT_APP_API_URL;

function AdminSignUpForm() {
    const navigate = useNavigate();
    const [captchaToken, setCaptchaToken] = useState("");
    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm();

    const onSubmit = async (data) => {
        if (!captchaToken) {
            sendAlert("danger", "Please complete the reCAPTCHA", () => { });
            return;
        }

        try {
            const payload = {
                email: data.email,
                password: data.newpassword,
                confirmPassword: data.confirmpassword,
                captcha: captchaToken
            };
            console.log(payload);


            const res = await axios.post(`${API_URL}/api/auth/signup`, payload);

            sendAlert("success", "Account created successfully!", () => { 
                navigate("/auth/verification", { state: { email: data.email, newuser: true } });
             });
        } catch (err) {
            console.error("❌ Signup failed:", err.response?.data || err.message);
            sendAlert(
                "danger",
                err.response?.data?.error || "Signup failed. Try again.",
                () => {}
            );
        }
    };

    return (
        <form className={Auth.uiAuthForm} onSubmit={handleSubmit(onSubmit)}>
            <div className='row'>
                <div className='col-12'>
                    <div className={Auth.uiAuthHeader}>
                        <h2 className={Auth.uiTitle}>Sign Up</h2>
                        <p className={Auth.uiText}>And lets get started with your free trial</p>
                    </div>
                </div>

                <div className='col-12'>
                    <FormControl
                        label="Email"
                        type="email"
                        name="email"
                        inputId="email"
                        placeholder="youname@mail.com"
                        register={register}
                        rules={{ required: "Email is required" }}
                        error={errors.email?.message}
                    />
                </div>

                <div className='col-12'>
                    <FormControl
                        label="New Password"
                        type="password"
                        name="newpassword"
                        inputId="newPassword"
                        placeholder="********"
                        register={register}
                        rules={{ required: "Password is required" }}
                        error={errors.newpassword?.message}
                    />
                </div>

                <div className='col-12'>
                    <FormControl
                        label="Confirm Password"
                        type="password"
                        name="confirmpassword"
                        inputId="confirmPassword"
                        placeholder="********"
                        register={register}
                        rules={{ required: "Confirm Password is required" }}
                        error={errors.confirmpassword?.message}
                    />
                </div>

                <div className='col-12'>
                    <div className={`${Globle.uiFormInputWrap} ${Auth.uiReChaptcha}`}>
                        <MyReCAPTCHA onVerify={setCaptchaToken} />
                    </div>
                </div>

                <div className='col-12'>
                    <button type='submit' className={`btn ${Globle.uiPrimaryBtn} w-100`}>
                        Sign Up
                    </button>
                </div>
            </div>
        </form>
    );
}

export default AdminSignUpForm;

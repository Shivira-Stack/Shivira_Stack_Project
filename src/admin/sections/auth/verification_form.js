import React, { useRef, useState, useEffect } from "react";
import { useForm } from "react-hook-form";
import { useNavigate, useLocation } from "react-router-dom";
import axios from "axios";
import Globle from "../../assets/css/globle.module.css";
import Auth from "../../assets/css/auth.module.css";
import { sendAlert } from "../../components/utilities/alert/alert_data";

const API_URL = process.env.REACT_APP_API_URL;

function AdminVerificationForm() {
    const navigate = useNavigate();
    const location = useLocation();
    const { email, newuser } = location.state || {};
    const [otp, setOtp] = useState(new Array(6).fill(""));
    const [timer, setTimer] = useState(0); // countdown timer in seconds
    const inputRefs = useRef([]);

    const {
        handleSubmit,
    } = useForm();

    // 🚨 Unauthorized check
    useEffect(() => {
        if (!email || newuser === undefined) {
            navigate("/unauthorized", {
                state: {
                    title: "Unauthorized Access",
                    desc: "Account details are missing, so we can’t verify your account. Please return home and try again.",
                    buttonPath: "/",
                    buttonName: "Go To Home",
                },
            });
        }
    }, [email, newuser, navigate]);

    // countdown effect
    useEffect(() => {
        if (timer > 0) {
            const countdown = setInterval(() => setTimer((t) => t - 1), 1000);
            return () => clearInterval(countdown);
        }
    }, [timer]);

    // handle input change
    const handleChange = (value, index) => {
        if (/^[0-9a-zA-Z]?$/.test(value)) {
            const newOtp = [...otp];
            newOtp[index] = value
            setOtp(newOtp);

            if (value && index < 5) {
                inputRefs.current[index + 1].focus();
            }
        }
    };

    // handle backspace
    const handleKeyDown = (e, index) => {
        if (e.key === "Backspace" && !otp[index] && index > 0) {
            inputRefs.current[index - 1].focus();
        }
    };

    // submit OTP
    const onSubmit = async () => {
        const otpCode = otp.join("");
        if (otpCode.length !== 6) {
            return sendAlert("danger", "Please enter full 6-digit OTP");
        }

        try {
            const res = await axios.post(`${API_URL}/api/auth/verify-otp`, {
                email,
                otp: otpCode,
            });
            sendAlert("success", "✅ OTP verified successfully!", () => {
                if (newuser) {
                    navigate("/auth");
                } else {
                    navigate("/auth/new_password", { state: { email } });
                }
            });
        } catch (err) {
            sendAlert("danger", err.response?.data?.error || "Invalid OTP");
        }
    };

    // resend OTP
    const handleResend = async () => {
        try {
            await axios.post(`${API_URL}/api/auth/resend-otp`, { email });
            sendAlert("success", "📩 OTP resent to your email");
            setTimer(300); // 5 min countdown
        } catch (err) {
            sendAlert("danger", err.response?.data?.error || "Failed to resend OTP");
        }
    };

    return (
        <form className={Auth.uiAuthForm} onSubmit={handleSubmit(onSubmit)}>
            <div className="row">
                <div className="col-12">
                    <div className={Auth.uiAuthHeader}>
                        <h2 className={Auth.uiTitle}>OTP Verification</h2>
                        <p className={Auth.uiText}>
                            We have sent you a One Time Password to your email
                        </p>
                    </div>
                </div>
                <div className="col-12">
                    <div className={Globle.uiFormInputWrap}>
                        <div className={Globle.uiFormOtpInputs}>
                            {otp.map((val, i) => (
                                <input
                                    key={i}
                                    type="text"
                                    maxLength={1}
                                    value={val}
                                    ref={(el) => (inputRefs.current[i] = el)}
                                    onChange={(e) => handleChange(e.target.value, i)}
                                    onKeyDown={(e) => handleKeyDown(e, i)}
                                    className={`form-control ${Globle.uiFormControl}`}
                                />
                            ))}
                        </div>
                    </div>
                </div>

                <div className="col-12">
                    <div className={`${Globle.uiFormInputWrap} text-center`}>
                        {timer > 0 ? (
                            <p className="text-with-link">
                                Resend OTP in{" "}
                                <span>
                                    {String(Math.floor(timer / 60)).padStart(2, "0")}:
                                    {String(timer % 60).padStart(2, "0")}
                                </span>
                            </p>
                        ) : (
                            <p className="text-with-link">
                                Didn't receive OTP?{" "}
                                <button
                                    type="button"
                                    onClick={handleResend}
                                    className={Auth.uiLink}
                                >
                                    Resend OTP
                                </button>
                            </p>
                        )}
                    </div>
                </div>

                <div className="col-12">
                    <button
                        type="submit"
                        className={`btn ${Globle.uiPrimaryBtn} w-100`}
                    >
                        Verify OTP
                    </button>
                </div>
            </div>
        </form>
    );
}

export default AdminVerificationForm;

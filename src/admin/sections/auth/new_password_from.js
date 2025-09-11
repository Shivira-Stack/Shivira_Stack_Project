import React, { useEffect, useState } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import Globle from "../../assets/css/globle.module.css";
import Auth from "../../assets/css/auth.module.css";
import MyReCAPTCHA from "../../../utilities/ReCAPTCHA";
import { useForm } from "react-hook-form";
import FormControl from "../../components/utilities/form_control";
import { sendAlert } from "../../components/utilities/alert/alert_data";
import { validationRules } from "../../../utilities/validationRules";

const API_URL = process.env.REACT_APP_API_URL;

function AdminNewPasswordForm() {
    const navigate = useNavigate();
    const location = useLocation();
    const { email } = location.state || {};
    const [captchaToken, setCaptchaToken] = useState("");

    const {
        register,
        handleSubmit,
        watch,
        formState: { errors },
    } = useForm();

    // 🚨 Unauthorized check
    useEffect(() => {
        if (!email) {
            navigate("/unauthorized", {
                state: {
                    title: "Unauthorized Access",
                    desc: "It looks like you tried to reset your password without a valid account. Please return home and try again.",
                    buttonPath: "/",
                    buttonName: "Go To Home",
                },
            });
        }
    }, [email, navigate]);

    const onSubmit = async (data) => {
        // ✅ Validate captcha
        if (!captchaToken) {
            return sendAlert("danger", "⚠️ Please complete the reCAPTCHA");
        }

        // ✅ Password match check
        if (data.newpassword !== data.confirmpassword) {
            return sendAlert("danger", "⚠️ Passwords do not match");
        }

        try {
            const payload = {
                email,
                newpassword: data.newpassword,
                confirmpassword: data.confirmpassword,
                captcha: captchaToken,
            };

            const response = await fetch(`${API_URL}/api/auth/reset-password`, {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify(payload),
            });

            const result = await response.json();

            if (!response.ok) {
                return sendAlert("danger", result.error);
            }

            sendAlert("success", "✅ Password reset successfully!", () => {
                navigate("/auth"); // Redirect to login
            });
        } catch (err) {
            console.error("Reset password error:", err);
            sendAlert("danger", "Something went wrong. Please try again later.");
        }
    };

    return (
        <form className={Auth.uiAuthForm} onSubmit={handleSubmit(onSubmit)}>
            <div className="row">
                {/* Header */}
                <div className="col-12">
                    <div className={Auth.uiAuthHeader}>
                        <h2 className={Auth.uiTitle}>Set New Password</h2>
                        <p className={Auth.uiText}>
                            Your new password must be different from the previous one.
                        </p>
                    </div>
                </div>

                {/* New password */}
                <div className="col-12">
                    <FormControl
                        label="New Password"
                        type="password"
                        name="newpassword"
                        inputId="newPassword"
                        placeholder="********"
                        register={register}
                        rules={validationRules.newpassword}
                        error={errors.newpassword?.message}
                    />
                </div>

                {/* Confirm password */}
                <div className="col-12">
                    <FormControl
                        label="Confirm Password"
                        type="password"
                        name="confirmpassword"
                        inputId="confirmPassword"
                        placeholder="********"
                        register={register}
                        rules={{
                            ...validationRules.confirmpassword,
                            validate: (value) =>
                                value === watch("newpassword") || "Passwords do not match", // ✅ compare with new password
                        }}
                        error={errors.confirmpassword?.message}
                    />
                </div>

                {/* reCAPTCHA */}
                <div className="col-12">
                    <div className={`${Globle.uiFormInputWrap} ${Auth.uiReChaptcha}`}>
                        <MyReCAPTCHA onVerify={setCaptchaToken} />
                    </div>
                </div>

                {/* Submit */}
                <div className="col-12">
                    <button type="submit" className={`btn ${Globle.uiPrimaryBtn} w-100`}>
                        Change Password
                    </button>
                </div>
            </div>
        </form>
    );
}

export default AdminNewPasswordForm;

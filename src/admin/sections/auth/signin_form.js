import { useState, useEffect } from "react";
import Globle from "../../assets/css/globle.module.css";
import Auth from "../../assets/css/auth.module.css";
import { Link, useNavigate } from "react-router-dom";
import MyReCAPTCHA from "../../../utilities/ReCAPTCHA";
import { useForm } from "react-hook-form";
import FormControl from "../../components/utilities/form_control";
import { sendAlert } from "../../components/utilities/alert/alert_data";
import { validationRules } from "../../../utilities/validationRules";
import { useSessionChecker } from "../../../utilities/useSessionChecker";

const API_URL = process.env.REACT_APP_API_URL;

function AdminSignInForm() {
    const navigate = useNavigate();
    const [captchaToken, setCaptchaToken] = useState("");

    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm();

    // ✅ Call hook at the top level
    const isAuthenticated = useSessionChecker();

    // ✅ Redirect if already authenticated
    useEffect(() => {
        const loginData = localStorage.getItem("LoginIs");
        if (loginData && isAuthenticated) {
            navigate("/admin");
        }
    }, [isAuthenticated, navigate]);

    const onSubmit = async (data) => {

        if (!captchaToken) {
            sendAlert("danger", "Please complete the reCAPTCHA");
            return;
        }

        try {
            const response = await fetch(`${API_URL}/api/auth/login`, {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                credentials: "include",
                body: JSON.stringify({ ...data, captcha: captchaToken }),
            });

            const result = await response.json();

            if (!response.ok) {
                return sendAlert("danger", result.error);
            }

            // ✅ Use message from API response
            const successMessage = result.message;
            sendAlert("success", successMessage, () => {
                navigate("/admin");
            });

        } catch (error) {
            sendAlert("danger", error);
        }
    };

    return (
        <form className={Auth.uiAuthForm} onSubmit={handleSubmit(onSubmit)}>
            <div className="row">
                <div className="col-12">
                    <div className={Auth.uiAuthHeader}>
                        <h2 className={Auth.uiTitle}>Welcome back!</h2>
                        <p className={Auth.uiText}>
                            Please enter your credentials to sign in!
                        </p>
                    </div>
                </div>

                {/* Email field */}
                <div className="col-12">
                    <FormControl
                        label="Email"
                        type="email"
                        name="email"
                        inputId="email"
                        placeholder="youname@mail.com"
                        register={register}
                        rules={validationRules.email}
                        error={errors.email?.message}
                    />
                </div>

                {/* Password field */}
                <div className="col-12">
                    <FormControl
                        label="Password"
                        type="password"
                        name="password"
                        inputId="password"
                        placeholder="********"
                        register={register}
                        rules={validationRules.password}
                        error={errors.password?.message}
                    />
                </div>

                {/* Forgot password */}
                <div className="col-12">
                    <div className={Globle.uiFormInputWrap}>
                        <Link to="/auth/forget_password" className={Auth.uiLink}>
                            Forget password?
                        </Link>
                    </div>
                </div>

                {/* Recaptcha */}
                <div className="col-12">
                    <div className={`${Globle.uiFormInputWrap} ${Auth.uiReChaptcha}`}>
                        <MyReCAPTCHA onVerify={setCaptchaToken} />
                    </div>
                </div>

                {/* Submit button */}
                <div className="col-12">
                    <button
                        type="submit"
                        className={`btn ${Globle.uiPrimaryBtn} w-100`}
                    >
                        Sign In
                    </button>
                </div>
            </div>
        </form>
    );
}

export default AdminSignInForm;

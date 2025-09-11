import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import Globle from "../../assets/css/globle.module.css";
import Auth from "../../assets/css/auth.module.css";
import MyReCAPTCHA from "../../../utilities/ReCAPTCHA";
import { useForm } from "react-hook-form";
import FormControl from "../../components/utilities/form_control";
import { sendAlert } from "../../components/utilities/alert/alert_data";
import { validationRules } from "../../../utilities/validationRules";

const API_URL = process.env.REACT_APP_API_URL;

function AdminForgetForm() {
    const navigate = useNavigate();
  const [captchaToken, setCaptchaToken] = useState("");
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = async (data) => {
    if (!captchaToken) {
      return sendAlert("danger", "⚠️ Please complete the reCAPTCHA");
    }

    try {
      const response = await fetch(`${API_URL}/api/auth/forgot-password`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email: data.email, captcha: captchaToken }),
      });

      const result = await response.json();

      if (!response.ok) {
        return sendAlert("danger", result.error);
      }

      sendAlert("success", "✅ OTP sent to your email!", () => {
        navigate("/auth/verification", { state: { email: data.email, newuser: false } });
      });
    } catch (err) {
      sendAlert("danger", "Something went wrong. Please try again later.");
    }
  };

  return (
    <form className={Auth.uiAuthForm} onSubmit={handleSubmit(onSubmit)}>
      <div className="row">
        {/* Header */}
        <div className="col-12">
          <div className={Auth.uiAuthHeader}>
            <h2 className={Auth.uiTitle}>Forgot Password</h2>
            <p className={Auth.uiText}>
              Please enter your email to receive a verification code
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

        {/* reCAPTCHA */}
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
            Forget Password
          </button>
        </div>
      </div>
    </form>
  );
}

export default AdminForgetForm;

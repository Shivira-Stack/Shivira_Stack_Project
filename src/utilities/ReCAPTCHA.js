import React from "react";
import ReCAPTCHA from "react-google-recaptcha";

function MyReCAPTCHA({ onVerify }) {
  return (
    <ReCAPTCHA className="reChaptcha"
      sitekey='6Ldu3rQrAAAAAHv4cj1Lbrvc0_k-UYZz1cx6Yyq1'
      onChange={onVerify}
    />
  );
}

export default MyReCAPTCHA;

import React, { useState } from "react";
import Globle from "../../assets/css/globle.module.css";

function FormControl({
  label,
  type = "text",
  name,
  inputId,
  placeholder = "",
  register,
  rules = {},
  error,
  className = "",
}) {
  const [showPassword, setShowPassword] = useState(false);
  const isPassword = type === "password";

  const inputProps = {
    id: inputId,
    placeholder,
    className: `form-control ${Globle.uiFormControl} ${className}`,
    ...(register ? register(name, rules) : {}),
  };

  return (
    <div className={Globle.uiFormInputWrap}>
      {label && (
        <label htmlFor={inputId} className={`form-label ${Globle.uiFormLabel}`}>
          {label}
        </label>
      )}

      {type === "textarea" ? (
        <textarea {...inputProps}></textarea>
      ) : (
        <div className={Globle.uiFormPasswordWrap}>
          <input
            {...inputProps}
            type={isPassword && showPassword ? "text" : type}
          />
          {isPassword && (
            <button
              type="button"
              className={`${Globle.uiInputWatchButton}`}
              onClick={() => setShowPassword((prev) => !prev)}
              aria-label="Toggle password visibility"
            >
              <span
                className={`fa-solid ${
                  showPassword ? "fa-eye-slash" : "fa-eye"
                }`}
              />
            </button>
          )}
        </div>
      )}

      {error && <span className={Globle.uiErrorText}>{error}</span>}
    </div>
  );
}

export default FormControl;

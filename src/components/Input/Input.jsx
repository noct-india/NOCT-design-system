import React from "react";
import "./Input.css";

export const Input = ({
  label,
  placeholder = "Enter value...",
  helperText,
  errorText,
  type = "text",
  size = "medium",
  state = "default",
  disabled = false,
  value,
  onChange,
  id,
}) => {
  const inputId = id || label?.toLowerCase().replace(/\s+/g, "-");
  const hasError = state === "error" || !!errorText;

  return (
    <div className={`input-field input-field--${size}${hasError ? " input-field--error" : ""}${disabled ? " input-field--disabled" : ""}`}>
      {label && <label className="input-field__label" htmlFor={inputId}>{label}</label>}
      <input
        id={inputId}
        type={type}
        className="input-field__input"
        placeholder={placeholder}
        disabled={disabled}
        value={value}
        onChange={onChange}
        aria-invalid={hasError}
        aria-describedby={helperText || errorText ? `${inputId}-hint` : undefined}
      />
      {(errorText || helperText) && (
        <p id={`${inputId}-hint`} className={`input-field__hint${hasError ? " input-field__hint--error" : ""}`}>
          {errorText || helperText}
        </p>
      )}
    </div>
  );
};

export default Input;

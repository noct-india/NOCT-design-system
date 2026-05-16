import React from "react";
import "./Checkbox.css";

/**
 * Checkbox — NOCT Design System
 * Variants: state (default | disabled) × value (unchecked | checked | indeterminate)
 */
export const Checkbox = ({
  label,
  checked = false,
  indeterminate = false,
  disabled = false,
  onChange,
  id,
  ...props
}) => {
  const inputRef = React.useRef(null);

  React.useEffect(() => {
    if (inputRef.current) {
      inputRef.current.indeterminate = indeterminate;
    }
  }, [indeterminate]);

  const checkboxId = id || `checkbox-${Math.random().toString(36).slice(2, 9)}`;

  return (
    <label
      className={[
        "checkbox",
        disabled ? "checkbox--disabled" : "",
        checked || indeterminate ? "checkbox--checked" : "",
      ]
        .filter(Boolean)
        .join(" ")}
      htmlFor={checkboxId}
    >
      <span className="checkbox__control" aria-hidden="true">
        {indeterminate && !checked && (
          <svg className="checkbox__icon" viewBox="0 0 10 2" fill="none">
            <rect x="0" y="0" width="10" height="2" rx="1" fill="currentColor" />
          </svg>
        )}
        {checked && (
          <svg className="checkbox__icon" viewBox="0 0 10 8" fill="none">
            <path
              d="M1 4l3 3 5-6"
              stroke="currentColor"
              strokeWidth="1.8"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        )}
      </span>
      <input
        ref={inputRef}
        id={checkboxId}
        type="checkbox"
        className="checkbox__input"
        checked={checked}
        disabled={disabled}
        onChange={onChange}
        {...props}
      />
      {label && <span className="checkbox__label">{label}</span>}
    </label>
  );
};

export default Checkbox;

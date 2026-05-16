import React from "react";
import "./Radio.css";

/**
 * Radio — NOCT Design System
 * Variants: state (default | disabled) × checked (true | false)
 */
export const Radio = ({
  label,
  checked = false,
  disabled = false,
  onChange,
  name,
  value,
  id,
  ...props
}) => {
  const radioId = id || `radio-${Math.random().toString(36).slice(2, 9)}`;

  return (
    <label
      className={[
        "radio",
        disabled ? "radio--disabled" : "",
        checked ? "radio--checked" : "",
      ]
        .filter(Boolean)
        .join(" ")}
      htmlFor={radioId}
    >
      <span className="radio__control" aria-hidden="true">
        {checked && <span className="radio__dot" />}
      </span>
      <input
        id={radioId}
        type="radio"
        className="radio__input"
        checked={checked}
        disabled={disabled}
        name={name}
        value={value}
        onChange={onChange}
        {...props}
      />
      {label && <span className="radio__label">{label}</span>}
    </label>
  );
};

export default Radio;

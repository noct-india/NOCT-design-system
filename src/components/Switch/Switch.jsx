import React from "react";
import "./Switch.css";

/**
 * Switch — NOCT Design System
 * Label sits on the LEFT, toggle on the RIGHT (space-between layout per Figma)
 * Variants: on (true | false) × disabled (true | false)
 */
export const Switch = ({
  label,
  checked = false,
  disabled = false,
  onChange,
  id,
  ...props
}) => {
  const switchId = id || `switch-${Math.random().toString(36).slice(2, 9)}`;

  return (
    <label
      className={[
        "switch",
        checked ? "switch--on" : "switch--off",
        disabled ? "switch--disabled" : "",
      ]
        .filter(Boolean)
        .join(" ")}
      htmlFor={switchId}
    >
      {label && <span className="switch__label">{label}</span>}
      <span className="switch__track" aria-hidden="true">
        <span className="switch__knob" />
      </span>
      <input
        id={switchId}
        type="checkbox"
        role="switch"
        className="switch__input"
        checked={checked}
        disabled={disabled}
        onChange={onChange}
        aria-checked={checked}
        {...props}
      />
    </label>
  );
};

export default Switch;

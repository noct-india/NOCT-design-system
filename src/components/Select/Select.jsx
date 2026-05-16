import React from "react";
import "./Select.css";

/**
 * Select — NOCT Design System
 * A styled native <select> with label, chevron icon, error/hint text.
 * States: default | error | disabled
 * Value types: placeholder (no selection) | default (selection made)
 */
export const Select = ({
  label,
  options = [],
  value,
  placeholder,
  onChange,
  error,
  hint,
  disabled = false,
  id,
  ...props
}) => {
  const selectId = id || `select-${Math.random().toString(36).slice(2, 9)}`;
  const hintId = hint || error ? `${selectId}-hint` : undefined;
  const isPlaceholder = !value || value === "";

  return (
    <div
      className={[
        "select-field",
        error ? "select-field--error" : "",
        disabled ? "select-field--disabled" : "",
      ]
        .filter(Boolean)
        .join(" ")}
    >
      {label && (
        <label className="select-field__label" htmlFor={selectId}>
          {label}
        </label>
      )}
      <div className="select-field__wrapper">
        <select
          id={selectId}
          className={[
            "select-field__select",
            isPlaceholder ? "select-field__select--placeholder" : "",
          ]
            .filter(Boolean)
            .join(" ")}
          value={value}
          onChange={onChange}
          disabled={disabled}
          aria-describedby={hintId}
          aria-invalid={!!error}
          {...props}
        >
          {placeholder && (
            <option value="" disabled hidden>
              {placeholder}
            </option>
          )}
          {options.map((opt) =>
            typeof opt === "string" ? (
              <option key={opt} value={opt}>
                {opt}
              </option>
            ) : (
              <option key={opt.value} value={opt.value} disabled={opt.disabled}>
                {opt.label}
              </option>
            )
          )}
        </select>
        {/* Chevron icon */}
        <span className="select-field__chevron" aria-hidden="true">
          <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
            <path
              d="M4 6l4 4 4-4"
              stroke="currentColor"
              strokeWidth="1.6"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </span>
      </div>
      {(hint || error) && (
        <p
          id={hintId}
          className={[
            "select-field__hint",
            error ? "select-field__hint--error" : "",
          ]
            .filter(Boolean)
            .join(" ")}
        >
          {error || hint}
        </p>
      )}
    </div>
  );
};

export default Select;

import React from "react";
import "./Textarea.css";

/**
 * Textarea — NOCT Design System
 * Mirrors the Input component but uses a <textarea> element.
 * Props: label, placeholder, value, onChange, rows, resize, error, hint, disabled, size
 */
export const Textarea = ({
  label,
  placeholder,
  value,
  onChange,
  rows = 4,
  resize = "vertical",
  error,
  hint,
  disabled = false,
  size = "medium",
  id,
  ...props
}) => {
  const textareaId = id || `textarea-${Math.random().toString(36).slice(2, 9)}`;
  const hintId = hint || error ? `${textareaId}-hint` : undefined;

  return (
    <div
      className={[
        "textarea-field",
        `textarea-field--${size}`,
        error ? "textarea-field--error" : "",
      ]
        .filter(Boolean)
        .join(" ")}
    >
      {label && (
        <label className="textarea-field__label" htmlFor={textareaId}>
          {label}
        </label>
      )}
      <textarea
        id={textareaId}
        className="textarea-field__textarea"
        placeholder={placeholder}
        value={value}
        onChange={onChange}
        rows={rows}
        disabled={disabled}
        aria-describedby={hintId}
        aria-invalid={!!error}
        style={{ resize }}
        {...props}
      />
      {(hint || error) && (
        <p
          id={hintId}
          className={[
            "textarea-field__hint",
            error ? "textarea-field__hint--error" : "",
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

export default Textarea;

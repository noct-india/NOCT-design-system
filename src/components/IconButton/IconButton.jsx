import React from "react";
import "./IconButton.css";

/**
 * IconButton — NOCT Design System
 * A square button containing only an icon (no label).
 * Variants: primary | neutral | subtle
 * Sizes: md (44×44) | sm (36×36)
 * States: default | disabled
 */

/* Default star icon — consumers should pass their own via the `icon` prop */
const StarIcon = () => (
  <svg width="20" height="20" viewBox="0 0 20 20" fill="none" aria-hidden="true">
    <path
      d="M10 2l2.39 4.84 5.34.78-3.87 3.77.91 5.32L10 14.27l-4.77 2.51.91-5.32L2.27 7.62l5.34-.78L10 2z"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeLinejoin="round"
    />
  </svg>
);

export const IconButton = ({
  icon,
  variant = "primary",
  size = "md",
  disabled = false,
  onClick,
  "aria-label": ariaLabel = "button",
  type = "button",
  ...props
}) => {
  return (
    <button
      type={type}
      className={[
        "icon-btn",
        `icon-btn--${variant}`,
        `icon-btn--${size}`,
        disabled ? "icon-btn--disabled" : "",
      ]
        .filter(Boolean)
        .join(" ")}
      disabled={disabled}
      onClick={onClick}
      aria-label={ariaLabel}
      {...props}
    >
      <span className="icon-btn__icon">
        {icon ?? <StarIcon />}
      </span>
    </button>
  );
};

export default IconButton;

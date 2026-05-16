import React from "react";
import "./Slider.css";

/**
 * Slider — NOCT Design System
 * 8px track (Radius/Full), 16px knob, value display on right.
 * Variants: default | disabled
 */
export const Slider = ({
  label,
  min = 0,
  max = 100,
  value = 0,
  step = 1,
  disabled = false,
  onChange,
  showValue = true,
  formatValue,
  id,
  ...props
}) => {
  const sliderId = id || `slider-${Math.random().toString(36).slice(2, 9)}`;
  const percentage = max > min ? ((value - min) / (max - min)) * 100 : 0;
  const displayValue = formatValue ? formatValue(value) : value;

  return (
    <div
      className={[
        "slider-field",
        disabled ? "slider-field--disabled" : "",
      ]
        .filter(Boolean)
        .join(" ")}
    >
      {label && (
        <div className="slider-field__header">
          <label className="slider-field__label" htmlFor={sliderId}>
            {label}
          </label>
          {showValue && (
            <output className="slider-field__value" htmlFor={sliderId}>
              {displayValue}
            </output>
          )}
        </div>
      )}
      <div className="slider-field__track-wrapper">
        <div className="slider-field__track">
          <div
            className="slider-field__fill"
            style={{ width: `${percentage}%` }}
          />
        </div>
        <input
          id={sliderId}
          type="range"
          className="slider-field__input"
          min={min}
          max={max}
          value={value}
          step={step}
          disabled={disabled}
          onChange={onChange}
          aria-valuemin={min}
          aria-valuemax={max}
          aria-valuenow={value}
          {...props}
        />
      </div>
      {!label && showValue && (
        <output className="slider-field__value" htmlFor={sliderId}>
          {displayValue}
        </output>
      )}
    </div>
  );
};

export default Slider;

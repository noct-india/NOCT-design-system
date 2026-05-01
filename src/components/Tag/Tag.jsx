import React from "react";
import "./Tag.css";

export const Tag = ({
  label = "Tag",
  scheme = "brand",
  variant = "primary",
  onRemove,
  onClick,
}) => {
  return (
    <span
      className={`tag tag--${scheme} tag--${variant}${onClick ? " tag--clickable" : ""}`}
      onClick={onClick}
      role={onClick ? "button" : undefined}
    >
      {label}
      {onRemove && (
        <button className="tag__remove" onClick={(e) => { e.stopPropagation(); onRemove(); }} aria-label="Remove">
          ✕
        </button>
      )}
    </span>
  );
};

export const TagToggle = ({ label = "Tag", active = false, onChange }) => {
  return (
    <button
      className={`tag tag--toggle${active ? " tag--toggle-on" : " tag--toggle-off"}`}
      onClick={() => onChange && onChange(!active)}
    >
      {label}
    </button>
  );
};

export default Tag;

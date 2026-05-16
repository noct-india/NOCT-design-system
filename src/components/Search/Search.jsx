import React from "react";
import "./Search.css";

const SearchIcon = () => (
  <svg width="16" height="16" viewBox="0 0 16 16" fill="none" aria-hidden="true">
    <circle cx="7" cy="7" r="4.5" stroke="currentColor" strokeWidth="1.5" />
    <path d="M10.5 10.5L13 13" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
  </svg>
);

const ClearIcon = () => (
  <svg width="16" height="16" viewBox="0 0 16 16" fill="none" aria-hidden="true">
    <path d="M4 4l8 8M12 4L4 12" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
  </svg>
);

/**
 * Search — NOCT Design System
 * Pill-shaped search input (Radius/Full).
 * Icon sits on the RIGHT: search icon when empty, X clear button when filled.
 * States: default | disabled
 */
export const Search = ({
  value = "",
  placeholder = "Search…",
  onChange,
  onClear,
  disabled = false,
  id,
  ...props
}) => {
  const searchId = id || `search-${Math.random().toString(36).slice(2, 9)}`;
  const isFilled = Boolean(value && value.length > 0);

  const handleClear = () => {
    onClear?.();
    if (onChange) {
      onChange({ target: { value: "" } });
    }
  };

  return (
    <div
      className={[
        "search-field",
        disabled          ? "search-field--disabled" : "",
        isFilled          ? "search-field--filled"   : "",
      ]
        .filter(Boolean)
        .join(" ")}
    >
      <input
        id={searchId}
        type="search"
        className="search-field__input"
        value={value}
        placeholder={placeholder}
        onChange={onChange}
        disabled={disabled}
        aria-label={props["aria-label"] || "Search"}
        {...props}
      />

      {/* Right-side icon: X when filled & enabled, search icon otherwise */}
      {isFilled && !disabled ? (
        <button
          type="button"
          className="search-field__clear"
          onClick={handleClear}
          aria-label="Clear search"
          tabIndex={-1}
        >
          <ClearIcon />
        </button>
      ) : (
        <span className="search-field__icon-right" aria-hidden="true">
          <SearchIcon />
        </span>
      )}
    </div>
  );
};

export default Search;

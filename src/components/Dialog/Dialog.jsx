import React, { useEffect } from "react";
import "./Dialog.css";

export const Dialog = ({
  open = false,
  title,
  body,
  confirmLabel = "Confirm",
  cancelLabel  = "Cancel",
  onConfirm,
  onClose,
  variant = "default",
  children,
}) => {
  useEffect(() => {
    const handleKey = (e) => { if (e.key === "Escape" && open) onClose?.(); };
    document.addEventListener("keydown", handleKey);
    return () => document.removeEventListener("keydown", handleKey);
  }, [open, onClose]);

  if (!open) return null;

  return (
    <div className="dialog-overlay" onClick={onClose} role="presentation">
      <div
        className={`dialog dialog--${variant}`}
        role="dialog"
        aria-modal="true"
        aria-labelledby="dialog-title"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="dialog__header">
          <h2 className="dialog__title" id="dialog-title">{title}</h2>
          <button className="dialog__close" onClick={onClose} aria-label="Close">✕</button>
        </div>
        <div className="dialog__body">
          {children || <p>{body}</p>}
        </div>
        {(onConfirm || onClose) && (
          <div className="dialog__footer">
            {onClose    && <button className="dialog__btn dialog__btn--cancel"  onClick={onClose}>{cancelLabel}</button>}
            {onConfirm  && <button className={`dialog__btn dialog__btn--confirm dialog__btn--${variant}`} onClick={onConfirm}>{confirmLabel}</button>}
          </div>
        )}
      </div>
    </div>
  );
};

export default Dialog;

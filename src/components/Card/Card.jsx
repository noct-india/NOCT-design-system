import React from "react";
import "./Card.css";

export const Card = ({
  title,
  subtitle,
  body,
  footer,
  image,
  variant = "default",
  padding = "medium",
  children,
}) => {
  return (
    <div className={`card card--${variant} card--pad-${padding}`}>
      {image && <div className="card__image"><img src={image} alt={title || ""} /></div>}
      <div className="card__content">
        {(title || subtitle) && (
          <div className="card__header">
            {title    && <h3 className="card__title">{title}</h3>}
            {subtitle && <p  className="card__subtitle">{subtitle}</p>}
          </div>
        )}
        {body    && <p className="card__body">{body}</p>}
        {children}
        {footer  && <div className="card__footer">{footer}</div>}
      </div>
    </div>
  );
};

export default Card;

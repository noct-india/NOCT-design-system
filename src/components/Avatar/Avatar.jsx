import React from "react";
import "./Avatar.css";

export const Avatar = ({
  type = "initial",
  initials = "AB",
  src,
  alt = "Avatar",
  size = "medium",
  shape = "circle",
}) => {
  return (
    <div className={`avatar avatar--${size} avatar--${shape}`}>
      {type === "image" && src ? (
        <img src={src} alt={alt} className="avatar__img" />
      ) : (
        <span className="avatar__initials">{initials.slice(0, 2).toUpperCase()}</span>
      )}
    </div>
  );
};

export const AvatarGroup = ({ avatars = [], spacing = "overlap" }) => {
  return (
    <div className={`avatar-group avatar-group--${spacing}`}>
      {avatars.map((avatar, i) => (
        <Avatar key={i} {...avatar} />
      ))}
    </div>
  );
};

export default Avatar;

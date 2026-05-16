import React from "react";
import { IconButton } from "./IconButton";

/* Sample icons for stories */
const EditIcon = () => (
  <svg width="20" height="20" viewBox="0 0 20 20" fill="none" aria-hidden="true">
    <path
      d="M14.7 2.3a1 1 0 011.4 1.4l-10 10L3 15l1.3-3.1 10-10z"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

const TrashIcon = () => (
  <svg width="20" height="20" viewBox="0 0 20 20" fill="none" aria-hidden="true">
    <path
      d="M4 6h12M8 6V4h4v2M6 6l1 10h6l1-10"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

export default {
  title: "Actions/IconButton",
  component: IconButton,
  tags: ["autodocs"],
  argTypes: {
    variant:  { control: "select",  options: ["primary", "neutral", "subtle"] },
    size:     { control: "select",  options: ["md", "sm"] },
    disabled: { control: "boolean" },
  },
};

export const Primary = {
  args: { variant: "primary", size: "md", "aria-label": "Edit", icon: <EditIcon /> },
};

export const Neutral = {
  args: { variant: "neutral", size: "md", "aria-label": "Edit", icon: <EditIcon /> },
};

export const Subtle = {
  args: { variant: "subtle", size: "md", "aria-label": "Edit", icon: <EditIcon /> },
};

export const Small = {
  args: { variant: "primary", size: "sm", "aria-label": "Delete", icon: <TrashIcon /> },
};

export const Disabled = {
  args: { variant: "primary", size: "md", "aria-label": "Edit", icon: <EditIcon />, disabled: true },
};

export const AllVariants = () => (
  <div style={{ display: "flex", gap: 12, flexWrap: "wrap", alignItems: "center" }}>
    {["primary", "neutral", "subtle"].map((v) => (
      <IconButton key={v} variant={v} size="md" aria-label={v} icon={<EditIcon />} />
    ))}
    {["primary", "neutral", "subtle"].map((v) => (
      <IconButton key={`${v}-sm`} variant={v} size="sm" aria-label={v} icon={<EditIcon />} />
    ))}
    <IconButton variant="primary" size="md" aria-label="disabled" icon={<EditIcon />} disabled />
  </div>
);

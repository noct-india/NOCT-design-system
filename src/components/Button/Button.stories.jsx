import { Button } from "./Button";

export default {
  title: "Components/Button",
  component: Button,
  tags: ["autodocs"],
  argTypes: {
    variant: {
      control: { type: "select" },
      options: ["primary", "secondary", "ghost", "danger", "success"],
    },
    size: {
      control: { type: "select" },
      options: ["sm", "md", "lg"],
    },
    disabled: { control: "boolean" },
    label:    { control: "text" },
  },
};

export const Primary   = { args: { variant: "primary",   size: "md", label: "Primary Button" } };
export const Secondary = { args: { variant: "secondary", size: "md", label: "Secondary Button" } };
export const Ghost     = { args: { variant: "ghost",     size: "md", label: "Ghost Button" } };
export const Danger    = { args: { variant: "danger",    size: "md", label: "Delete" } };
export const Success   = { args: { variant: "success",   size: "md", label: "Confirm" } };
export const Small     = { args: { variant: "primary",   size: "sm", label: "Small" } };
export const Large     = { args: { variant: "primary",   size: "lg", label: "Large Button" } };
export const Disabled  = { args: { variant: "primary",   size: "md", label: "Disabled", disabled: true } };

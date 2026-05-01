import { Input } from "./Input";

export default {
  title: "Components/Input",
  component: Input,
  tags: ["autodocs"],
  argTypes: {
    size:  { control: { type: "select" }, options: ["small", "medium", "large"] },
    state: { control: { type: "select" }, options: ["default", "error"] },
    type:  { control: { type: "select" }, options: ["text", "email", "password", "number"] },
  },
};

export const Default  = { args: { label: "Email address", placeholder: "you@example.com", size: "medium" } };
export const WithHelper = { args: { label: "Username", placeholder: "Enter username", helperText: "Must be at least 4 characters.", size: "medium" } };
export const Error    = { args: { label: "Email address", placeholder: "you@example.com", errorText: "Please enter a valid email.", size: "medium" } };
export const Disabled = { args: { label: "Username", placeholder: "Disabled field", disabled: true, size: "medium" } };
export const Small    = { args: { label: "Small Input", placeholder: "Small size", size: "small" } };
export const Large    = { args: { label: "Large Input", placeholder: "Large size", size: "large" } };
export const Password = { args: { label: "Password", placeholder: "Enter password", type: "password", size: "medium" } };

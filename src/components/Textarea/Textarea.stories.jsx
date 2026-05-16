import React, { useState } from "react";
import { Textarea } from "./Textarea";

export default {
  title: "Form/Textarea",
  component: Textarea,
  tags: ["autodocs"],
  argTypes: {
    size:     { control: "select", options: ["small", "medium", "large"] },
    disabled: { control: "boolean" },
    resize:   { control: "select", options: ["none", "vertical", "horizontal", "both"] },
  },
};

const Template = (args) => {
  const [value, setValue] = useState(args.value ?? "");
  return <Textarea {...args} value={value} onChange={(e) => setValue(e.target.value)} />;
};

export const Default = Template.bind({});
Default.args = {
  label: "Message",
  placeholder: "Enter your message…",
  size: "medium",
  rows: 4,
};

export const WithHint = Template.bind({});
WithHint.args = {
  label: "Bio",
  placeholder: "Tell us about yourself",
  hint: "Max 500 characters",
  rows: 4,
};

export const WithError = Template.bind({});
WithError.args = {
  label: "Description",
  placeholder: "Enter description",
  error: "This field is required",
  rows: 4,
};

export const Disabled = Template.bind({});
Disabled.args = {
  label: "Disabled",
  placeholder: "Not editable",
  disabled: true,
  rows: 4,
};

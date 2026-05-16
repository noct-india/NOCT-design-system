import React, { useState } from "react";
import { Select } from "./Select";

const OPTIONS = ["Apple", "Banana", "Cherry", "Durian", "Elderberry"];

export default {
  title: "Form/Select",
  component: Select,
  tags: ["autodocs"],
  argTypes: {
    disabled: { control: "boolean" },
  },
};

const Template = (args) => {
  const [value, setValue] = useState(args.value ?? "");
  return (
    <Select
      {...args}
      value={value}
      onChange={(e) => setValue(e.target.value)}
    />
  );
};

export const Default = Template.bind({});
Default.args = {
  label: "Fruit",
  placeholder: "Select a fruit…",
  options: OPTIONS,
};

export const WithValue = Template.bind({});
WithValue.args = {
  label: "Fruit",
  options: OPTIONS,
  value: "Banana",
};

export const WithError = Template.bind({});
WithError.args = {
  label: "Fruit",
  placeholder: "Select a fruit…",
  options: OPTIONS,
  error: "Please select an option",
};

export const Disabled = Template.bind({});
Disabled.args = {
  label: "Fruit",
  placeholder: "Select a fruit…",
  options: OPTIONS,
  disabled: true,
};

export const WithObjectOptions = Template.bind({});
WithObjectOptions.args = {
  label: "Priority",
  placeholder: "Choose priority…",
  options: [
    { value: "low",    label: "Low"    },
    { value: "medium", label: "Medium" },
    { value: "high",   label: "High"   },
    { value: "critical", label: "Critical", disabled: true },
  ],
};

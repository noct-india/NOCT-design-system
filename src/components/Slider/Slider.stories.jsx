import React, { useState } from "react";
import { Slider } from "./Slider";

export default {
  title: "Form/Slider",
  component: Slider,
  tags: ["autodocs"],
  argTypes: {
    disabled:  { control: "boolean" },
    showValue: { control: "boolean" },
    min:       { control: "number" },
    max:       { control: "number" },
    step:      { control: "number" },
  },
  decorators: [
    (Story) => (
      <div style={{ maxWidth: 400, padding: "8px 0" }}>
        <Story />
      </div>
    ),
  ],
};

const Template = (args) => {
  const [value, setValue] = useState(args.value ?? args.min ?? 0);
  return (
    <Slider
      {...args}
      value={value}
      onChange={(e) => setValue(Number(e.target.value))}
    />
  );
};

export const Default = Template.bind({});
Default.args = { label: "Volume", min: 0, max: 100, value: 40, showValue: true };

export const PriceRange = Template.bind({});
PriceRange.args = {
  label: "Price",
  min: 0,
  max: 1000,
  value: 250,
  step: 10,
  showValue: true,
  formatValue: (v) => `$${v}`,
};

export const NoLabel = Template.bind({});
NoLabel.args = { min: 0, max: 100, value: 60, showValue: true };

export const Disabled = Template.bind({});
Disabled.args = { label: "Brightness", min: 0, max: 100, value: 30, disabled: true, showValue: true };

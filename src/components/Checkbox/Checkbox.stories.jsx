import React, { useState } from "react";
import { Checkbox } from "./Checkbox";

export default {
  title: "Form/Checkbox",
  component: Checkbox,
  tags: ["autodocs"],
  argTypes: {
    checked:       { control: "boolean" },
    indeterminate: { control: "boolean" },
    disabled:      { control: "boolean" },
    label:         { control: "text" },
  },
};

const Template = (args) => {
  const [checked, setChecked] = useState(args.checked ?? false);
  return (
    <Checkbox
      {...args}
      checked={checked}
      onChange={(e) => setChecked(e.target.checked)}
    />
  );
};

export const Default = Template.bind({});
Default.args = { label: "Accept terms and conditions", checked: false };

export const Checked = Template.bind({});
Checked.args = { label: "Checked", checked: true };

export const Indeterminate = (args) => (
  <Checkbox {...args} label="Indeterminate" checked={false} indeterminate />
);

export const Disabled = Template.bind({});
Disabled.args = { label: "Disabled", checked: false, disabled: true };

export const DisabledChecked = Template.bind({});
DisabledChecked.args = { label: "Disabled + Checked", checked: true, disabled: true };

export const NoLabel = Template.bind({});
NoLabel.args = { checked: false };

export const AllStates = () => (
  <div style={{ display: "flex", flexDirection: "column", gap: 16 }}>
    <Checkbox label="Unchecked" checked={false} onChange={() => {}} />
    <Checkbox label="Checked"   checked={true}  onChange={() => {}} />
    <Checkbox label="Indeterminate" checked={false} indeterminate onChange={() => {}} />
    <Checkbox label="Disabled unchecked" disabled checked={false} onChange={() => {}} />
    <Checkbox label="Disabled checked"   disabled checked={true}  onChange={() => {}} />
  </div>
);

import React, { useState } from "react";
import { Switch } from "./Switch";

export default {
  title: "Form/Switch",
  component: Switch,
  tags: ["autodocs"],
  argTypes: {
    checked:  { control: "boolean" },
    disabled: { control: "boolean" },
    label:    { control: "text" },
  },
};

const Template = (args) => {
  const [checked, setChecked] = useState(args.checked ?? false);
  return (
    <Switch
      {...args}
      checked={checked}
      onChange={(e) => setChecked(e.target.checked)}
    />
  );
};

export const Off = Template.bind({});
Off.args = { label: "Dark mode", checked: false };

export const On = Template.bind({});
On.args = { label: "Dark mode", checked: true };

export const Disabled = Template.bind({});
Disabled.args = { label: "Notifications", checked: false, disabled: true };

export const DisabledOn = Template.bind({});
DisabledOn.args = { label: "Notifications", checked: true, disabled: true };

export const NoLabel = Template.bind({});
NoLabel.args = { checked: false };

export const AllStates = () => (
  <div style={{ display: "flex", flexDirection: "column", gap: 16 }}>
    <Switch label="Off"              checked={false} onChange={() => {}} />
    <Switch label="On"               checked={true}  onChange={() => {}} />
    <Switch label="Disabled off"     checked={false} disabled onChange={() => {}} />
    <Switch label="Disabled on"      checked={true}  disabled onChange={() => {}} />
  </div>
);

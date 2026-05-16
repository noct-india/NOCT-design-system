import React, { useState } from "react";
import { Radio } from "./Radio";

export default {
  title: "Form/Radio",
  component: Radio,
  tags: ["autodocs"],
  argTypes: {
    checked:  { control: "boolean" },
    disabled: { control: "boolean" },
    label:    { control: "text" },
  },
};

export const Default = (args) => {
  const [value, setValue] = useState("option1");
  return (
    <div style={{ display: "flex", flexDirection: "column", gap: 12 }}>
      <Radio
        label="Option 1"
        name="demo"
        value="option1"
        checked={value === "option1"}
        onChange={() => setValue("option1")}
      />
      <Radio
        label="Option 2"
        name="demo"
        value="option2"
        checked={value === "option2"}
        onChange={() => setValue("option2")}
      />
      <Radio
        label="Option 3"
        name="demo"
        value="option3"
        checked={value === "option3"}
        onChange={() => setValue("option3")}
      />
    </div>
  );
};

export const Unchecked = () => <Radio label="Unchecked" checked={false} onChange={() => {}} />;
export const Checked   = () => <Radio label="Checked"   checked={true}  onChange={() => {}} />;
export const Disabled  = () => <Radio label="Disabled"  disabled        onChange={() => {}} />;
export const DisabledChecked = () => (
  <Radio label="Disabled + Checked" disabled checked onChange={() => {}} />
);

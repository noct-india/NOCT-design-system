import React, { useState } from "react";
import { Search } from "./Search";

export default {
  title: "Form/Search",
  component: Search,
  tags: ["autodocs"],
  argTypes: {
    disabled: { control: "boolean" },
  },
  decorators: [
    (Story) => (
      <div style={{ maxWidth: 400 }}>
        <Story />
      </div>
    ),
  ],
};

const Template = (args) => {
  const [value, setValue] = useState(args.value ?? "");
  return (
    <Search
      {...args}
      value={value}
      onChange={(e) => setValue(e.target.value)}
      onClear={() => setValue("")}
    />
  );
};

export const Empty = Template.bind({});
Empty.args = { placeholder: "Search components…" };

export const Filled = Template.bind({});
Filled.args = { value: "Button", placeholder: "Search components…" };

export const Disabled = Template.bind({});
Disabled.args = { placeholder: "Search components…", disabled: true };

export const DisabledFilled = Template.bind({});
DisabledFilled.args = { value: "Button", placeholder: "Search…", disabled: true };

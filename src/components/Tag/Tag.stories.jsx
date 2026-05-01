import { useState } from "react";
import { Tag, TagToggle } from "./Tag";

export default {
  title: "Components/Tag",
  component: Tag,
  tags: ["autodocs"],
  argTypes: {
    scheme:  { control: { type: "select" }, options: ["brand", "danger", "positive", "warning", "neutral"] },
    variant: { control: { type: "select" }, options: ["primary", "secondary"] },
    label:   { control: "text" },
  },
};

export const Brand    = { args: { scheme: "brand",    variant: "primary",   label: "Brand" } };
export const Danger   = { args: { scheme: "danger",   variant: "primary",   label: "Danger" } };
export const Positive = { args: { scheme: "positive", variant: "primary",   label: "Positive" } };
export const Warning  = { args: { scheme: "warning",  variant: "primary",   label: "Warning" } };
export const Neutral  = { args: { scheme: "neutral",  variant: "primary",   label: "Neutral" } };

export const Secondary = { args: { scheme: "brand", variant: "secondary", label: "Secondary" } };

export const WithRemove = {
  args: { scheme: "brand", variant: "primary", label: "Removable" },
  render: (args) => <Tag {...args} onRemove={() => alert("Removed!")} />,
};

export const AllSchemes = {
  render: () => (
    <div style={{ display: "flex", gap: "8px", flexWrap: "wrap" }}>
      {["brand","danger","positive","warning","neutral"].map(s => (
        <Tag key={s} scheme={s} variant="primary" label={s.charAt(0).toUpperCase() + s.slice(1)} />
      ))}
    </div>
  ),
};

export const Toggle = {
  render: () => {
    const [active, setActive] = useState(false);
    return <TagToggle label="Toggle me" active={active} onChange={setActive} />;
  },
};

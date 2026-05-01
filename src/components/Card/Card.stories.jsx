import { Card } from "./Card";
import { Button } from "../Button/Button";

export default {
  title: "Components/Card",
  component: Card,
  tags: ["autodocs"],
  argTypes: {
    variant: { control: { type: "select" }, options: ["default", "subtle", "elevated"] },
    padding: { control: { type: "select" }, options: ["small", "medium", "large"] },
  },
};

export const Default = {
  args: {
    title:    "Card Title",
    subtitle: "Supporting subtitle text",
    body:     "This is the body content of the card. It provides more detail about the subject.",
    variant:  "default",
    padding:  "medium",
  },
};

export const Subtle   = { args: { ...Default.args, variant: "subtle"   } };
export const Elevated = { args: { ...Default.args, variant: "elevated" } };

export const WithFooter = {
  args: { ...Default.args },
  render: (args) => (
    <Card {...args} footer={<Button label="Action" variant="primary" size="sm" />} />
  ),
};

export const Minimal = {
  args: { title: "Simple Card", body: "Minimal content.", variant: "default", padding: "medium" },
};

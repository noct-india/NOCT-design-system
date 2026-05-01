import { Avatar, AvatarGroup } from "./Avatar";

export default {
  title: "Components/Avatar",
  component: Avatar,
  tags: ["autodocs"],
  argTypes: {
    type:     { control: { type: "select" }, options: ["initial", "image"] },
    size:     { control: { type: "select" }, options: ["large", "medium", "small"] },
    shape:    { control: { type: "select" }, options: ["circle", "square"] },
    initials: { control: "text" },
  },
};

export const Initial = { args: { type: "initial", initials: "AB", size: "large", shape: "circle" } };
export const InitialSquare = { args: { type: "initial", initials: "CD", size: "large", shape: "square" } };
export const Medium = { args: { type: "initial", initials: "EF", size: "medium", shape: "circle" } };
export const Small  = { args: { type: "initial", initials: "GH", size: "small",  shape: "circle" } };

export const Group = {
  render: () => (
    <AvatarGroup
      spacing="overlap"
      avatars={[
        { type: "initial", initials: "AB", size: "medium", shape: "circle" },
        { type: "initial", initials: "CD", size: "medium", shape: "circle" },
        { type: "initial", initials: "EF", size: "medium", shape: "circle" },
      ]}
    />
  ),
};

export const GroupSpaced = {
  render: () => (
    <AvatarGroup
      spacing="spaced"
      avatars={[
        { type: "initial", initials: "AB", size: "medium", shape: "circle" },
        { type: "initial", initials: "CD", size: "medium", shape: "circle" },
        { type: "initial", initials: "EF", size: "medium", shape: "circle" },
      ]}
    />
  ),
};

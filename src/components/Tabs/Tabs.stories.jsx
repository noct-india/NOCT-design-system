import { Tabs } from "./Tabs";

export default {
  title: "Components/Tabs",
  component: Tabs,
  tags: ["autodocs"],
};

const sampleTabs = [
  { label: "Overview",  content: "This is the Overview tab content." },
  { label: "Details",   content: "This is the Details tab content." },
  { label: "Activity",  content: "This is the Activity tab content." },
  { label: "Disabled",  content: "You won't see this.", disabled: true },
];

export const Default     = { render: () => <Tabs tabs={sampleTabs} /> };
export const SecondActive = { render: () => <Tabs tabs={sampleTabs} defaultTab={1} /> };

export const WithCounts = {
  render: () => (
    <Tabs tabs={[
      { label: "Inbox",   count: 12, content: "12 unread messages." },
      { label: "Sent",    count: 4,  content: "4 sent messages." },
      { label: "Drafts",  count: 0,  content: "No drafts." },
    ]} />
  ),
};

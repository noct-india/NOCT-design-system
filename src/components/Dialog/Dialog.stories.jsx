import { useState } from "react";
import { Dialog } from "./Dialog";
import { Button } from "../Button/Button";

export default {
  title: "Components/Dialog",
  component: Dialog,
  tags: ["autodocs"],
  parameters: { layout: "centered" },
};

export const Default = {
  render: () => {
    const [open, setOpen] = useState(false);
    return (
      <>
        <Button label="Open Dialog" variant="primary" size="md" onClick={() => setOpen(true)} />
        <Dialog
          open={open}
          title="Confirm action"
          body="Are you sure you want to proceed? This action cannot be undone."
          confirmLabel="Confirm"
          cancelLabel="Cancel"
          onConfirm={() => setOpen(false)}
          onClose={() => setOpen(false)}
        />
      </>
    );
  },
};

export const Danger = {
  render: () => {
    const [open, setOpen] = useState(false);
    return (
      <>
        <Button label="Delete Item" variant="danger" size="md" onClick={() => setOpen(true)} />
        <Dialog
          open={open}
          title="Delete item"
          body="This will permanently delete the item. This action cannot be undone."
          confirmLabel="Delete"
          cancelLabel="Cancel"
          variant="danger"
          onConfirm={() => setOpen(false)}
          onClose={() => setOpen(false)}
        />
      </>
    );
  },
};

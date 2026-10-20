import "./EditButton.css";

import { useState } from "react";
import ColorForm from "../ColorForm/ColorForm";

export default function EditButton({ id, onEditColor, initialData }) {
  const [editMode, setEditMode] = useState(false);

  function handleSubmit(data) {
    onEditColor(id, data);
    setEditMode(false);
  }

  if (!editMode) {
    return (
      <button type="button" onClick={() => setEditMode(true)}>
        EDIT
      </button>
    );
  }

  return (
    <>
      <ColorForm
        onSubmit={handleSubmit}
        initialData={initialData}
        SubmitContent="UPDATE COLOR"
      />
      <button
        className="Btn Btn__cancle"
        type="button"
        onClick={() => setEditMode(false)}
      >
        CANCLE
      </button>
    </>
  );
}

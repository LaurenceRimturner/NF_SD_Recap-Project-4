import { useState } from "react";

export default function DeleteButton({ onDeleteColor, id }) {
  const [confirmMessage, setconfirmMessage] = useState(false);

  if (!confirmMessage) {
    return (
      <button type="button" onClick={() => setconfirmMessage(true)}>
        DELETE
      </button>
    );
  }

  return (
    <>
      <p className="color-card-highlight">Really delete?</p>
      <button type="button" onClick={() => setconfirmMessage(false)}>
        CANCLE
      </button>
      <button type="button" onClick={() => onDeleteColor(id)}>
        DELETE
      </button>
    </>
  );
}

import "./DeleteButton.css";
import { useState } from "react";

export default function DeleteButton({ onDeleteColor, id }) {
  const [confirmMessage, setconfirmMessage] = useState(false);

  if (!confirmMessage) {
    return (
      <button
        type="button"
        className="Btn__delete"
        onClick={() => setconfirmMessage(true)}
      >
        DELETE
      </button>
    );
  }

  return (
    <>
      <p className="color-card-highlight">Really delete?</p>
      <button
        className="Btn__cancle"
        type="button"
        onClick={() => setconfirmMessage(false)}
      >
        CANCLE
      </button>
      <button
        className="Btn__delete"
        type="button"
        onClick={() => onDeleteColor(id)}
      >
        DELETE
      </button>
    </>
  );
}

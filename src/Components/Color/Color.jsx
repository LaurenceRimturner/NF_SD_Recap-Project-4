import { useState } from "react";
import "./Color.css";

export default function Color({
  hexColor,
  role,
  contrastText,
  onDeleteColor,
  id,
}) {
  const [confirmMessage, setconfirmMessage] = useState("");

  return (
    <article
      style={{ backgroundColor: hexColor, color: contrastText }}
      className="color-card"
    >
      <p className="color-card-highlight">{hexColor}</p>
      <p>
        <b>{role}</b>
      </p>
      <p>Contrast: {contrastText}</p>
      <div>
        <p className="color-card-highlight">Really delete?</p>

        <button
          className="color-card-button"
          type="button"
          onClick={() => onDeleteColor(id)}
        >
          CANCLE
        </button>
        <button
          className="color-card-button"
          type="button"
          onClick={() => onDeleteColor(id)}
        >
          DELETE
        </button>
      </div>
    </article>
  );
}

import "./Color.css";
import ColorForm from "../ColorForm/ColorForm.jsx";

import { useState } from "react";

export default function Color({
  hexColor,
  role,
  contrastText,
  onDeleteColor,
  handleEditColor,
  id,
}) {
  const [isEditing, setisEditing] = useState(false);
  const [confirmMessage, setconfirmMessage] = useState(false);

  return (
    <article
      style={{ backgroundColor: hexColor, color: contrastText }}
      className="color-card"
    >
      <h3 className="color-card-highlight">{hexColor}</h3>
      <p>
        <b>{role}</b>
      </p>
      <p>Contrast: {contrastText}</p>
      <div>
        {!isEditing && !confirmMessage && (
          <button type="button" onClick={() => setconfirmMessage(true)}>
            DELETE
          </button>
        )}
        {confirmMessage && (
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
        )}
        {!confirmMessage && (
          <button type="button" onClick={() => setisEditing(true)}>
            EDIT
          </button>
        )}
        {isEditing && (
          <>
            <ColorForm
              btnText="UPDATE COLOR"
              initialData={{ role, hexColor, contrastText }}
              onSubmit={(formValues) => handleEditColor({ id, ...formValues })}
            />
            <button type="button" onClick={() => setisEditing(false)}>
              CANCLE
            </button>
          </>
        )}
      </div>
    </article>
  );
}

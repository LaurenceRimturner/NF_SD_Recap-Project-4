import "./Color.css";
import ColorForm from "../ColorForm/ColorForm.jsx";
import { useState, useEffect } from "react";

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
  const [isCopied, setIsCopied] = useState(false);

  async function CopyToClipboard(color) {
    try {
      await navigator.clipboard.writeText(color);
      setIsCopied(true);
    } catch (error) {
      console.error(error.message);
    }
  }

  useEffect(() => {
    const id = setInterval(() => setIsCopied(false), 3000);
    return () => {
      clearInterval(id);
    };
  }, []);

  return (
    <article
      style={{
        backgroundColor: hexColor,
        color: contrastText,
        boxShadow: `0 0 8px ${hexColor}`,
      }}
      className="color-card"
    >
      <h3 className="color-card-highlight">{hexColor}</h3>
      <button type="button" onClick={() => CopyToClipboard(hexColor)}>
        {!isCopied ? "COPY" : "SUCCESFULLY COPIED!"}
      </button>
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

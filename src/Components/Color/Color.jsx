import "./Color.css";
import { useState, useEffect } from "react";
import ColorForm from "../ColorForm/ColorForm.jsx";
import ContrastChecker from "../ContrastCatcher/ContrastCatcher";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrash } from "@fortawesome/free-solid-svg-icons";
import { faPenToSquare } from "@fortawesome/free-solid-svg-icons";
import { faCopy } from "@fortawesome/free-solid-svg-icons";
import { faCheck } from "@fortawesome/free-solid-svg-icons";

export default function Color({
  hexColor,
  contrastText,
  role,
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
  }, [setIsCopied]);

  return (
    <article
      style={{
        backgroundColor: hexColor,
        color: contrastText,
        boxShadow: `0 0 8px ${hexColor}`,
      }}
      className="color-card"
    >
      <div className="cardHeader">
        <ContrastChecker hexColor={hexColor} contrastText={contrastText} />
        <button
          type="button"
          className="copy-btn"
          aria-label="Copy hex color"
          onClick={() => CopyToClipboard(hexColor)}
        >
          <FontAwesomeIcon icon={faCopy} size="xl" />
          {isCopied && (
            <span className="tooltip" role="status">
              Copied!
            </span>
          )}
        </button>
      </div>
      <h3 className="color-card-highlight">{hexColor}</h3>
      <p>
        <b>{role}</b>
      </p>
      <p>Contrast: {contrastText}</p>
      <div className="funcBtnContainer">
        {!isEditing && !confirmMessage && (
          <button type="button" onClick={() => setconfirmMessage(true)}>
            <FontAwesomeIcon icon={faTrash} size="xl" />
          </button>
        )}
        <div className="formBtn">
          {" "}
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
                <FontAwesomeIcon icon={faTrash} size="xl" /> DELETE
              </button>
            </>
          )}
          {!confirmMessage && (
            <button type="button" onClick={() => setisEditing(true)}>
              <FontAwesomeIcon icon={faPenToSquare} size="xl" />{" "}
            </button>
          )}
          {isEditing && (
            <>
              <ColorForm
                btnText="UPDATE COLOR"
                btnIcon={faCheck}
                initialData={{ role, hexColor, contrastText }}
                onSubmit={(formValues) => {
                  handleEditColor({ id, ...formValues });
                  setisEditing(false);
                }}
              />
              <button type="button" onClick={() => setisEditing(false)}>
                CANCLE
              </button>
            </>
          )}
        </div>
      </div>
    </article>
  );
}

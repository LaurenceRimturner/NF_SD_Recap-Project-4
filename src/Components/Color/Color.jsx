import "./Color.css";
import DeleteButton from "../ConfirmButton/DeleteButton.jsx";

export default function Color({
  hexColor,
  role,
  contrastText,
  onDeleteColor,
  id,
}) {
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
        <DeleteButton onDeleteColor={() => onDeleteColor(id)} />
      </div>
    </article>
  );
}

import "./Color.css";
import DeleteButton from "../DeleteButton/DeleteButton.jsx";
import EditButton from "../EditButton/EditButton.jsx";

export default function Color({
  hexColor,
  role,
  contrastText,
  onDeleteColor,
  onEditColor,
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
        <EditButton
          id={id}
          initialData={{ role, hex: hexColor, contrastText }}
          onEditColor={onEditColor}
        />
      </div>
    </article>
  );
}

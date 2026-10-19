import "./Color.css";

export default function Color({ hexColor, role, contrastText }) {
  return (
    <article
      style={{ backgroundColor: hexColor, color: contrastText }}
      className="color-card"
    >
      <p className="color-card-headline">{hexColor}</p>
      <p>
        <b>{role}</b>
      </p>
      <p>Contrast: {contrastText}</p>
    </article>
  );
}

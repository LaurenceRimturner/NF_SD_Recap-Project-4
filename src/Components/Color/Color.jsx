import "./Color.css";

export default function Color({ hexColor, role, contrastText }) {
  return (
    <article style={{ backgroundColor: hexColor }} className="color-card">
      <p className="color-card-headline">{hexColor}</p>
      <p>{role}</p>
      <p>Contrast Color: {contrastText}</p>
    </article>
  );
}

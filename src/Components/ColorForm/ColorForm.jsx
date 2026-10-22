import "./ColorForm.css";
import ColorInput from "../ColorInput/ColorInput.jsx";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlus } from "@fortawesome/free-solid-svg-icons";

export default function ColorForm({
  onSubmit,
  initialData = {
    role: "Primary Color",
    hexColor: "#123456",
    contrastText: "#ffffff",
  },
  btnText,
  btnIcon = faPlus,
}) {
  function handleSubmit(event) {
    event.preventDefault();
    const formData = new FormData(event.target);
    const data = Object.fromEntries(formData);
    onSubmit(data);
  }

  return (
    <form onSubmit={handleSubmit}>
      <label htmlFor="role">
        Role
        <br />
        <input
          type="text"
          id="role"
          name="role"
          defaultValue={initialData.role}
        />
      </label>
      <label htmlFor="hexColor">
        Hex <br />
        <ColorInput id="hex" defaultValue={initialData.hexColor} />
      </label>
      <label htmlFor="contrastText">
        Contrast Text <br />
        <ColorInput id="contrastText" defaultValue={initialData.contrastText} />
      </label>
      <button type="submit">
        {btnText} <FontAwesomeIcon icon={btnIcon} size="lg" />
      </button>
    </form>
  );
}

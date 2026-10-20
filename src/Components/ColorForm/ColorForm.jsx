import "./ColorForm.css";
import ColorInput from "../ColorInput/ColorInput.jsx";
import SubmitButton from "../SubmitButton/SubmitButton.jsx";

export default function ColorPicker({
  onSubmit,
  initialData = { role: "some color", hex: "#123456", contrastText: "#ffffff" },
  SubmitContent = "ADD Color",
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
        <ColorInput id="hex" defaultValue={initialData.hex} />
      </label>
      <label htmlFor="contrastText">
        Contrast Text <br />
        <ColorInput id="contrastText" defaultValue={initialData.contrastText} />
      </label>
      <SubmitButton>{SubmitContent}</SubmitButton>
    </form>
  );
}

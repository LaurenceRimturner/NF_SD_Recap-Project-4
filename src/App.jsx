import "./App.css";
import Color from "./Components/Color/Color";
import ColorForm from "./Components/ColorForm/ColorForm";
import ColorInput from "./Components/ColorInput/ColorInput";
import { initialColors } from "./lib/colors";
import { useState } from "react";
import { uid } from "uid";

function App() {
  const [colors, setColors] = useState(initialColors);

  function handleAddColor(newColor) {
    setColors([
      {
        id: uid(),
        hexColor: newColor.hexColorInput,
        role: newColor.role,
        contrastText: newColor.contrastTextInput,
        ...newColor,
      },
      ...colors,
    ]);
    console.log(newColor);
  }

  return (
    <>
      <h1>Theme Creator</h1>
      <ColorForm onAddColor={handleAddColor} />
      {colors.map((color) => (
        <Color
          key={color.id}
          hexColor={color.hex}
          role={color.role}
          contrastText={color.contrastText}
        ></Color>
      ))}
    </>
  );
}

export default App;

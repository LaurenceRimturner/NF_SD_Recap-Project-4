import "./App.css";
import Color from "./Components/Color/Color";
import ColorForm from "./Components/ColorForm/ColorForm";
import { initialColors } from "./lib/colors";
import { useState } from "react";
import { uid } from "uid";

function App() {
  const [colorsArray, setColorsArray] = useState(initialColors);

  function handleAddColor(newColor) {
    setColorsArray([
      {
        id: uid(),
        hex: newColor.hexColorInput,
        role: newColor.role,
        contrastText: newColor.contrastTextInput,
        ...newColor,
      },
      ...colorsArray,
    ]);
  }

  function handleDeleteColor(id) {
    setColorsArray(colorsArray.filter((color) => color.id !== id));
  }

  function handleEditColor(id, newData) {
    setColorsArray(
      colorsArray.map((color) =>
        color.id === id
          ? {
              id: color.id,
              role: newData.role,
              hex: newData.hex,
              contrastText: newData.contrastText,
            }
          : color,
      ),
    );
  }
  return (
    <>
      <h1>Theme Creator</h1>

      <ColorForm onSubmit={handleAddColor} />
      {colorsArray.map((color) => (
        <Color
          key={color.id}
          id={color.id}
          hexColor={color.hex}
          role={color.role}
          contrastText={color.contrastText}
          onDeleteColor={handleDeleteColor}
          onEditColor={handleEditColor}
        />
      ))}
      <h3>
        {colorsArray.length === 0 ? "No colors.. start by adding one!" : ""}
      </h3>
    </>
  );
}

export default App;

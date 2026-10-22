import "./App.css";
import Color from "./Components/Color/Color";
import ColorForm from "./Components/ColorForm/ColorForm";
import { initialColors } from "./lib/colors";
import { uid } from "uid";
import useLocalStorageState from "use-local-storage-state";

function App() {
  const [colorsArray, setColorsArray, { removeItem, isPersistent }] =
    useLocalStorageState("colorsArray", {
      defaultValue: initialColors,
    });

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

  function handleEditColor(updatedColor) {
    setColorsArray(
      colorsArray.map((color) =>
        color.id === updatedColor.id ? { ...color, ...updatedColor } : color,
      ),
    );
  }

  return (
    <>
      <h1>Theme Creator</h1>
      <ColorForm onSubmit={handleAddColor} btnText="ADD COLOR" />
      <div className="colorContainer">
        {colorsArray.map((color) => (
          <Color
            key={color.id}
            id={color.id}
            hexColor={color.hex}
            role={color.role}
            contrastText={color.contrastText}
            onDeleteColor={handleDeleteColor}
            handleEditColor={handleEditColor}
            {...(!isPersistent && (
              <span>Changes arent currently persisted.</span>
            ))}
          />
        ))}
      </div>
      <button
        type="button"
        className="Btn__reset"
        onClick={() => {
          if (window.confirm("Are you sure to reset the color palette?"))
            removeItem();
        }}
      >
        COLOR PALETTE RESET
      </button>
      <h3>
        {colorsArray.length === 0 ? "No colors.. start by adding one!" : ""}
      </h3>
    </>
  );
}

export default App;

import { initialColors } from "./lib/colors";
import Color from "./Components/Color/Color";
import "./App.css";

console.log(initialColors);
function App() {
  return (
    <>
      <h1>Theme Creator</h1>
      {initialColors.map((color) => (
        <Color
          key={color.id}
          hexColor={color.hex}
          role={color.role}
          contrastText={color.contrastText}
        ></Color>
      ))}
      <Color />
    </>
  );
}

export default App;

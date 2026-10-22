import { useState } from "react";

export const initialThemes = [
  {
    id: "t1",
    name: "Default Theme",
    colors: ["c1", "c2", "c3", "c4", "c5", "c6", "c7", "c8", "c9"],
  },
  {
    id: "t2",
    name: "2nd Theme",
    colors: ["c10", "c11", "c12"],
  },
];

export default function MultipleThemes() {
  const [activeTheme, setActiveTheme] = useState(initialThemes);

  function handleTheme(id) {
    setActiveTheme(id);
  }

  return (
    <>
      <label htmlFor="themeMenu">Theme Changer</label>
      <select
        id="themeMenu"
        onChange={() => {
          console.log("theme");
        }}
      >
        {initialThemes.map((theme) => (
          <option key={theme.id} defaultValue={theme}>
            {theme.name}
          </option>
        ))}
      </select>
    </>
  );
}

// Wo baue ich dieses Element?
// Wo kommt die ID her?

// Erschaffen Object mit props (id, name, colors) -> onClick CurrData abgreifen
// Color beinhaltet alle Farben aus dem initialColors
// Array muss gespeichert werden und wieder aufrufbar
// Erstellen von Dropdown mit allen initialThemes.name (Selects)(States?)

// This is a complex ticket that requires major refactoring

// evlt. Ticket nachholen und auf Styling konzentrieren ?

// Refactoring: Wie eien Zwiebel, Obere Schicht von MultThemes

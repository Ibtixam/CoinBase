import React, { useState } from "react";
import ModeContext from "./ModeContext";

const ModeState = ({ children }) => {
  const [mode, setMode] = useState("light");

  const toggleMode = () => {
    console.log("first");
    if (mode === "light") {
      setMode("dark");
      document.body.style.background = "#FFF9FE";
      document.body.classList.add("dark-mode");
    } else {
      setMode("light");
      document.body.style.background = "#1E0338";
      document.body.classList.remove("dark-mode");
    }
  };

  return (
    <ModeContext.Provider value={{ mode, setMode, toggleMode }}>
      {children}
    </ModeContext.Provider>
  );
};

export default ModeState;

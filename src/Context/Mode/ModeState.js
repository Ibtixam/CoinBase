import React, { useState } from "react";
import ModeContext from "./ModeContext";

const ModeState = ({ children }) => {
  const [mode, setMode] = useState(true);

  const toggleMode = () => {
    if (mode) {
      setMode(false);
      document.body.style.background = "#FFF9FE";
      document.body.classList.add("dark-mode");
    } else {
      setMode(true);
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

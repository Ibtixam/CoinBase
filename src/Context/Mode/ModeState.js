import React, { useEffect, useState } from "react";
import ModeContext from "./ModeContext";

const ModeState = ({ children }) => {
  const toggleMode = () => {
    setMode(!mode);
    document.body.classList.toggle("light-mode", mode);
    localStorage.setItem("theme", JSON.stringify(mode));
  };

  const initialMode = JSON.parse(localStorage.getItem("theme")) || false;
  const [mode, setMode] = useState(initialMode);

  useEffect(() => {
    document.body.classList.toggle("light-mode", mode);
    setMode(!mode);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <ModeContext.Provider value={{ mode, toggleMode }}>
      {children}
    </ModeContext.Provider>
  );
};

export default ModeState;

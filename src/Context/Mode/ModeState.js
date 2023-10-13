import React, { useEffect, useState } from "react";
import ModeContext from "./ModeContext";

const ModeState = ({ children }) => {
  const initialMode = JSON.parse(localStorage.getItem("theme")) || false;

  // States
  const [mode, setMode] = useState(initialMode);
  const [loading, setLoading] = useState(false);

  // Toggle Modes
  const toggleMode = () => {
    setMode(!mode);
    document.body.classList.toggle("light-mode", mode);
    localStorage.setItem("theme", JSON.stringify(mode));
  };

  // Use Effects
  useEffect(() => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
    }, 1500);
  }, []);

  useEffect(() => {
    document.body.classList.toggle("light-mode", mode);
    setMode(!mode);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <ModeContext.Provider value={{ mode, toggleMode, loading }}>
      {children}
    </ModeContext.Provider>
  );
};

export default ModeState;

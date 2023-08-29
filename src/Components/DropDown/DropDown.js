import React, { useEffect, useRef, useState } from "react";
import "./DropDown.css";
import { OptionSvg } from "../../assets/svgs";

const DropDown = (props) => {
  const [options, setOptions] = useState("");

  const toggleOptions = (index) => {
    if (options === "") {
      setOptions(index);
    } else {
      setOptions("");
    }
  };

  const Opt = useRef(null);

  useEffect(() => {
    document.addEventListener("click", handleClickOutside, true);
  }, []);

  const handleClickOutside = (e) => {
    if (!Opt.current.contains(e.target)) {
      setOptions("");
    } else {
        
    }
  };

  const { index, Class } = props;

  return (
    <div>
      <OptionSvg
        ref={Opt}
        className={Class}
        onClick={() => toggleOptions(index)}
      />
      <div className={`options ${options === index && "selectoptions"}`}>
        <div className="edit">Edit</div>
        <div className="enable">Enable</div>
      </div>
    </div>
  );
};

export default DropDown;

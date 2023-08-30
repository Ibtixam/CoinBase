import React, { useEffect, useRef, useState } from "react";
import "./DropDown.css";
import { OptionSvg } from "../../assets/svgs";

const DropDown = (props) => {
  const Opt = useRef(null);
  const [options, setOptions] = useState("");

  useEffect(() => {
    const handleClickOutside = (e) => {
      if (Opt.current && !Opt.current.contains(e.target)) {
        setOptions("");
      }
    };

    document.addEventListener("click", handleClickOutside);

    return () => {
      document.removeEventListener("click", handleClickOutside);
    };
  }, []);

  const toggleOptions = (index) => {
    if (options === "") {
      setOptions(index);
    } else {
      setOptions("");
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

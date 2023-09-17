import React, { useEffect, useRef, useState } from "react";
import "./DropDown.css";
import { OptionSvg } from "../../assets/svgs";
import { Option, OptionButton } from "./styles";

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

  const { index, Class, value1, value2 } = props;
  const selected = options === index;

  return (
    <div>
      <OptionSvg
        ref={Opt}
        className={Class}
        onClick={() => toggleOptions(index)}
      />
      <Option selected={selected}>
        <OptionButton>{value1}</OptionButton>
        <OptionButton>{value2}</OptionButton>
      </Option>
    </div>
  );
};

export default DropDown;

import React, { useEffect, useRef, useState } from "react";
import { OptionSvg } from "../../assets/svgs";
import { Option, OptionButton } from "./styles";

const DropDown = ({ index, optionList, style }) => {
  const Opt = useRef(null);
  const [options, setOptions] = useState("");

  useEffect(() => {
    const handleClickOutside = (e) => {
      if (!Opt.current.contains(e.target)) {
        setOptions("");
      }
    };

    document.addEventListener("click", handleClickOutside);

    return () => {
      document.removeEventListener("click", handleClickOutside);
    };
  }, []);

  const toggleOptions = (index) => {
    if (!options) {
      setOptions(index);
    } else {
      setOptions("");
    }
  };

  const selected = options === index;

  return (
    <div style={style}>
      <OptionSvg
        ref={Opt}
        style={{ cursor: "pointer" }}
        onClick={() => toggleOptions(index)}
      />
      <Option selected={selected}>
        {optionList?.map((item, index) => {
          const { label } = item;
          return <OptionButton key={index}>{label}</OptionButton>;
        })}
      </Option>
    </div>
  );
};

export default DropDown;

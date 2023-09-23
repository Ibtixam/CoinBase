import React, { useEffect, useRef, useState } from "react";
import { OptionSvg } from "../../assets/svgs";
import { Option, OptionButton } from "./styles";

const DropDown = ({ index, Class, optionList }) => {
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

  const selected = options === index;

  return (
    <div>
      <OptionSvg
        ref={Opt}
        className={Class}
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

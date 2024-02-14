import { useState } from "react";
import styled from "styled-components";

const InputHeadless = ({ children }) => {
  const [value, setValue] = useState("");

  const handleChangeValue = (e) => {
    console.log(e.target.value)
    setValue(e.target.value);
  };
  return children({
    value,
    onChange: handleChangeValue,
  });
};

export default InputHeadless;

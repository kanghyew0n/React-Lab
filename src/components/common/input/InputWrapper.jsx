import { useContext } from "react";
import { createContext } from "react";
import styled from "styled-components";

const InputContext = createContext({
  id: "",
  value: "",
  type: "text",
  onchange: () => {},
});

const InputWrapper = ({ id, value, type, onChange, children }) => {
  const contextValue = { id, value, type, onChange };
  return (
    <InputContext.Provider value={contextValue}>
      {children}
    </InputContext.Provider>
  );
};

const Input = ({ ...props }) => {
  const { id, value, type, onChange } = useContext(InputContext);
  return (
    <InputBox
      id={id}
      value={value}
      type={type}
      onChange={onChange}
      {...props}
    />
  );
};

const Label = ({ children, ...props }) => {
  const { id } = useContext(InputContext);
  return (
    <label htmlFor={id} {...props}>
      {children}
    </label>
  );
};

InputWrapper.Input = Input;
InputWrapper.Label = Label;

export default InputWrapper;

const InputBox = styled.input`
  width: 100%;
  padding: 15px 10px;
  margin: 10px 0;
  border-radius: 4px;
  border: 1px solid #999;
  background-color: #000;
  color: #eee;

  &:focus {
    border: 1px solid #eee;
    outline: none;
  }
`;

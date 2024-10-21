import styled from "styled-components";

const Input = ({ id, type }) => {
  return <StyledInput id={id} type={type} />;
};

const StyledInput = styled.input`
  background-color: rgba(255, 255, 255, 0.1);
  border: 1px solid rgba(255, 255, 255, 0.1);
  color: #fff;

  &:focus {
    outline: none;
  }
`;

export default Input;

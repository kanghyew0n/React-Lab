import styled from "styled-components";

const InputLabel = ({ label, id }) => {
  return <StyledLabel htmlFor={id}>{label}</StyledLabel>;
};

const StyledLabel = styled.label`
  margin-top: 10px;
  margin-bottom: 5px;
`

export default InputLabel;

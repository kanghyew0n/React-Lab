import styled from "styled-components";
import Input from "./Input";
import InputLabel from "./InputLabel";
import Button from "./Button";

const FormControl = () => {
  const onSubmit = (e) => {
    e.preventDefault();
  };

  return (
    <StyledFormControl onSubmit={onSubmit}>
      <InputLabel label="이름" id={"name"} />
      <Input id={"name"} />
      <InputLabel label="나이" id={"age"} />
      <Input id={"age"} />
      <InputLabel label="하고싶은 말" id={"say"} />
      <Input id={"say"} />
      <Button type="submit">제출</Button>
    </StyledFormControl>
  );
};

const StyledFormControl = styled.form`
  background-color: rgba(255, 255, 255, 0.1);
  border-radius: 20px;
  padding: 40px;
`;

export default FormControl;

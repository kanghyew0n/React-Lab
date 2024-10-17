import styled from "styled-components";
import KeyboardArrowDownRoundedIcon from "@mui/icons-material/KeyboardArrowDownRounded";

const AgreementCheckBox = ({
  id,
  label,
  checked,
  role = "child",
  isChildVisible,
  onChange,
  handleShowChildCheckbox,
}) => {
  console.log(isChildVisible);
  return (
    <Wrapper $role={role}>
      <Container $role={role} $isVisible={isChildVisible}>
        <input type="checkbox" id={id} checked={checked} onChange={onChange} />
        <label htmlFor={id}>{label}</label>
        {role === "parent" && (
          <KeyboardArrowDownRoundedIcon onClick={handleShowChildCheckbox} />
        )}
      </Container>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  margin-left: ${(props) => (props.$role === "child" ? "30px" : "0")};
`;

const Container = styled.div`
  display: flex;
  align-items: center;
  gap: 15px;
  padding: 10px 10px;
  border-radius: 5px;

  background-color: ${(props) =>
    props.$role === "parent" ? "rgba(255,255,255,0.1)" : "transparent"};

  input,
  label {
    cursor: pointer;
  }

  input {
    width: 20px;
    aspect-ratio: 1 / 1;
  }

  label {
    user-select: none;
    flex: 1;
  }

  svg {
    cursor: pointer;
    transition: transform 0.3s ease-in-out;
    transform: ${(props) =>
      props.$isVisible ? "rotate(180deg)" : "rotate(0deg)"};
  }
`;

export default AgreementCheckBox;

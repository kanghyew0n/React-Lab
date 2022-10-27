import styled from "styled-components";

const Square = (props) => {
  return (
    <>
      <Button onClick={props.onClick}>{props.value}</Button>
    </>
  );
};

const Button = styled.div`
  width: 100px;
  height: 100px;
  background-color: #111;
  color: #eee;
  border: solid 1px #fff;
  font-size: 20px;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export default Square;

import { useState } from "react";
import styled from "styled-components";

const heavyWork = () => {
  console.log("so heavy work!!!");
  const arr = ["kkama", "Rin"];
  return arr;
};

const UseState = () => {
  const [input, setInput] = useState("");
  const [names, setNames] = useState(() => heavyWork());

  const handleInputChange = (e) => {
    setInput(e.target.value);
  };

  const handleUpload = () => {
    setNames((prevState) => {
      console.log("prevState : ", prevState);
      return [input, ...prevState];
    });
  };

  return (
    <Container>
      <input type="text" value={input} onChange={handleInputChange} />
      <button onClick={handleUpload}>업로드</button>
      {names.map((name, idx) => {
        return <p key={idx}>{name}</p>;
      })}
    </Container>
  );
};

const Container = styled.div`
  text-align: center;

  input {
    background-color: #111;
    padding: 10px;
    border: 1px solid #333;
    margin-right: 10px;
    color: #eee;
    margin-bottom: 10px;

    &:focus {
      outline: 1px solid #eee;
    }
  }

  button {
    margin-bottom: 10px;
    background-color: #111;
    padding: 10px;
    border: 1px solid #333;
    color: #eee;
    &:hover {
      background-color: #eee;
      color: #111;
    }
  }

  p {
    margin-top: 10px;
  }
`;

export default UseState;

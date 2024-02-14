import { useState } from "react";
import styled from "styled-components";
import InputWrapper from "../components/common/input/InputWrapper";
import InputHeadless from "../components/common/input/InputHeadless";

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

      <InputWrapper
        id="name"
        value="hello"
        type="text"
        onChange={(e) => console.log(e)}
      >
        <InputWrapper.Label>안녕하세요 라벨입니다</InputWrapper.Label>
        <InputWrapper.Input />
      </InputWrapper>

      <InputHeadless>
        {({ value, onChange }) => {
          return (
            <div>
              <label htmlFor="func">func children</label>
              <InputBox
                id="func"
                value={value}
                type={"text"}
                onChange={onChange}
              />
            </div>
          );
        }}
      </InputHeadless>
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

export default UseState;

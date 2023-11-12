import { useState } from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

const Main = () => {
  const [isShowHook, setIsShowHook] = useState(true);
  const [isShowLib, setIsShowLib] = useState(true);
  const [isShowCustom, setIsShowCustom] = useState(true);

  return (
    <MainContainer>
      <Category>
        <Title onClick={(e) => setIsShowHook(!isShowHook)}>
          Hook! {isShowHook ? "▴" : "▾"}
        </Title>
        {isShowHook && (
          <>
            <Link to="/state">
              <span>useState</span>
            </Link>
            <Link to="/context">
              <span>useContext</span>
            </Link>
          </>
        )}
      </Category>
      {/* 이전 버전 
      <Category>
        <Link to="/game">
          <Title>Game!</Title>
        </Link>
      </Category> */}
      <Category>
        <Title onClick={() => setIsShowLib(!isShowLib)}>
          Library! {isShowLib ? "▴" : "▾"}
        </Title>
        {isShowLib && (
          <>
            <Link to="/textEditor">
              <span>React-Quill</span>
            </Link>
            <Link to="/hookForm">
              <span>React-Hook-Form</span>
            </Link>
            <Link to="/dropZone">
              <span>Drop-zone</span>
            </Link>
          </>
        )}
      </Category>
      <Category>
        <Title onClick={(e) => setIsShowCustom(!isShowCustom)}>
          Custom! {isShowCustom ? "▴" : "▾"}
        </Title>
        {isShowCustom && (
          <>
            <Link to="/scrolling">
              <span>Scrolling</span>
            </Link>
            <Link to="/cursor-follow">
              <span>Cursor Follow</span>
            </Link>
          </>
        )}
      </Category>
    </MainContainer>
  );
};

const MainContainer = styled.div`
  width: 100%;
  padding: 50px;
  text-align: center;

  a {
    display: flex;
    flex-direction: column;
    user-select: none;
  }

  span {
    font-size: 18px;
    margin: 5px;
  }
`;

const Title = styled.h1`
  margin-bottom: 10px;
  cursor: pointer;
  user-select: none;
`;

const Category = styled.div`
  margin-bottom: 30px;
  a {
    /* display: none; */
  }
`;

export default Main;

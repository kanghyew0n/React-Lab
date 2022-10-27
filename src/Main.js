import styled from "styled-components";

const Main = () => {
  return (
    <MainContainer>
      <p className="title">🚀 리액트 연습 페이지 🚀</p>
      <p>메뉴를 클릭해보쟈</p>
    </MainContainer>
  );
};

const MainContainer = styled.div`
  width: 100%;
  padding: 50px;
  text-align: center;

  .title {
    font-size: 18px;
    margin-bottom: 5px;
    margin-top: 20px;
    font-weight: 600;
  }
`;

export default Main;

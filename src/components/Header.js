import styled from "styled-components";
import { Link } from "react-router-dom";
const Header = () => {
  return (
    <HeaderContainer>
      <HeaderInner>
        <Link to="/">
          <Logo>🫧 리액트 실험실 🔬🥼</Logo>
        </Link>
        <Items>
          <li>메뉴를 클릭해보쟈</li>
          <li>@kanghyew0n</li>
        </Items>
      </HeaderInner>
    </HeaderContainer>
  );
};
const HeaderContainer = styled.div`
  height: 80px;
  width: 100%;
`;

const HeaderInner = styled.div`
  width: 80%;
  height: 100%;
  margin: 0 auto;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

const Logo = styled.div`
  font-weight: 600;
`;

const Items = styled.ul`
  display: flex;
  height: 100%;
  align-items: center;
  gap: 32px;

  li {
    cursor: default;
  }
`;
export default Header;

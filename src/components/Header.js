import styled from "styled-components";
import { Link } from "react-router-dom";
const Header = () => {
  return (
    <HeaderContainer>
      <HeaderInner>
        <Link to="/">
          <Logo>kanghyew0n</Logo>
        </Link>
        <Items>
          <Link to="/state">
            <li>useState</li>
          </Link>
          <Link to="/game">
            <li>game</li>
          </Link>
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
`;
export default Header;

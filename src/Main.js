import { useState } from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

const Main = () => {
    const [isClick, setIsClick] = useState(false);
    return (
        <MainContainer>
            <Category>
                <Title onClick={() => setIsClick(!isClick)}>
                    HOOK! {isClick ? "▴" : "▾"}
                </Title>
                <Link to="/state">
                    <span>useState</span>
                </Link>
                <Link to="/context">
                    <span>useContext</span>
                </Link>
            </Category>
            <Category>
                <Link to="/game">
                    <Title>GAME!</Title>
                </Link>
            </Category>
            <Category>
                <Title onClick={() => setIsClick(!isClick)}>
                    Library! {isClick ? "▴" : "▾"}
                </Title>

                <Link to="/textEditor">
                    <span>React-Quill</span>
                </Link>
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

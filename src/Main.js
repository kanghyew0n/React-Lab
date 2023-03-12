import { useState } from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

const Main = () => {
    const [isClick, setIsClick] = useState(false);
    return (
        <MainContainer>
            <h1 onClick={() => setIsClick(!isClick)}>HOOK! {isClick ? "▴" : "▾"}</h1>
            {isClick && (
                <>
                    <Link to="/state">
                        <span>useState</span>
                    </Link>
                    <Link to="/context">
                        <span>useContext</span>
                    </Link>
                </>
            )}
            <Link to="/game">
                <h1>GAME!</h1>
            </Link>
        </MainContainer>
    );
};

const MainContainer = styled.div`
    width: 100%;
    padding: 50px;
    text-align: center;

    h1 {
        margin-bottom: 10px;
        cursor: pointer;
        user-select: none;

    }

    a {
        display: flex;
        flex-direction: column;
        user-select: none;

    }

    span {
        font-size: 18px;
        margin: 5px;
    }

    a:has(h1) {
        margin-top: 30px;
    }
`;

export default Main;

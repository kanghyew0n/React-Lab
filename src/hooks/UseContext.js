import React from "react";
import { useContext } from "react";
import styled from "styled-components";

import { ThemeContext } from "../context/ThemeContext";

const UseContext = () => {
    const { isDark, setIsDark } = useContext(ThemeContext);
    return (
        <Context onClick={() => setIsDark(!isDark)}>
            {isDark ? "🌚" : "🌞"}
        </Context>
    );
};

const Context = styled.div`
    font-size: 150px;
    user-select: none;
    display: flex;
    justify-content: center;
    align-items: center;
    margin-top: 50px;
`;

export default UseContext;

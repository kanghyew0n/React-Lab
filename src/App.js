/* eslint-disable no-undef */
import "./App.css";
import styled from "styled-components";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import UseState from "./hooks/UseState";
import Header from "./components/Header";
import Main from "./Main";
import Game from "./react-tutorial/Game";
import UseContext from "./hooks/UseContext";
import { useState } from "react";
import { ThemeContext } from "./context/ThemeContext";

function App() {
    const [isDark, setIsDark] = useState(true);
    return (
        <ThemeContext.Provider value={{ isDark, setIsDark }}>
            <AppContainer isDark={isDark}>
                <BrowserRouter>
                    <Header />
                    <Inner>
                        <Routes>
                            <Route path="/" element={<Main />} />
                            <Route path="/state" element={<UseState />} />
                            <Route path="/context" element={<UseContext />} />
                            <Route path="/game" element={<Game />} />
                        </Routes>
                    </Inner>
                </BrowserRouter>
            </AppContainer>
        </ThemeContext.Provider>
    );
}

const AppContainer = styled.div`
min-height: 100vh;
    background-color: ${(props) => (props.isDark ? "#111" : "#f8f8f8")};
    color: ${(props) => (props.isDark ? "#eee" : "#111")};

    a {
        color: ${(props) => (props.isDark ? "#eee" : "#111")};
    }
`;

const Inner = styled.div`
    width: 80%;
    padding-top: 50px;
    margin: 0 auto;
`;
export default App;

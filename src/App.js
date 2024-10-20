/* eslint-disable no-undef */
import "./App.css";
import styled from "styled-components";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import Main from "./Main";
import Game from "./react-tutorial/Game";
import { UseContext, UseState } from "./hooks";
import { useState } from "react";
import { ThemeContext } from "./context/ThemeContext";
import TextEditor from "./lib/TextEditor";
import HookForm from "./lib/hookForm/HookForm";
import DropZone from "./lib/DropZone";
import Scrolling from "./components/Scrolling";
import CursorFollow from "./components/CursorFollow";
import LettersFilter from "./container/LettersFilter";
import { AgreementGroup } from "./components/component/Agreement";
import { FormControl } from "./components/component/Form";


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
              <Route path="/textEditor" element={<TextEditor />} />
              <Route path="/hookForm" element={<HookForm />} />
              <Route path="/dropZone" element={<DropZone />} />
              <Route path="/scrolling" element={<Scrolling />} />
              <Route path="/cursor-follow" element={<CursorFollow />} />
              <Route path="/letter" element={<LettersFilter />} />
              <Route path="/check-box" element={<AgreementGroup />} />
              <Route path="/form" element={<FormControl />} />
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

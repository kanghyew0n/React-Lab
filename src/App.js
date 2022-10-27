import "./App.css";
import styled from "styled-components";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import UseState from "./hooks/UseState";
import Header from "./components/Header";
import Main from "./Main";
import Game from "./react-tutorial/Game";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Header />
        <Inner>
          <Routes>
            <Route path="/" element={<Main />} />
            <Route path="/state" element={<UseState />} />
            <Route path="/game" element={<Game />} />

          </Routes>
        </Inner>
      </BrowserRouter>
    </div>
  );
}

const Inner = styled.div`
  width: 80%;
  padding-top: 50px;
  margin: 0 auto;
`;
export default App;

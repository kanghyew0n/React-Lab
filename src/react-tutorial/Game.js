import { useState } from "react";
import styled from "styled-components";
import Board from "./Board";

const Game = () => {
  const [state, setState] = useState({
    history: [{ squares: Array(9).fill(null) }],
    stepNumber: 0,
    xIsNext: true,
  });

  const current = state.history[state.stepNumber];
  const winner = calculateWinner(current.squares);

  const handleClick = (i) => {
    const history = state.history.slice(0, state.stepNumber + 1);
    const squares = current.squares.slice();

    if (calculateWinner(squares) || squares[i]) {
      return;
    }

    squares[i] = state.xIsNext ? "X" : "O";
    setState({
      ...state,
      history: history.concat([
        {
          squares: squares,
        },
      ]),
      stepNumber: history.length,
      xIsNext: !state.xIsNext,
    });
  };

  const jumpTo = (step) => {
    setState({
      ...state,
      stepNumber: step,
      xIsNext: step % 2 === 0,
    });
  };

  const moves = state.history.map((step, move) => {
    const desc = move ? "Go to move #" + move : "Go to game start";
    return (
      <div onClick={() => jumpTo(move)} key={move}>
        {desc}
      </div>
    );
  });

  let status;
  if (winner) {
    status = "Winner: " + winner;
  } else {
    status = "Next player: " + (state.xIsNext ? "X" : "O");
  }

  return (
    <Container>
      <div className="game">
        <div className="game-board">
          <Board squares={current.squares} onClick={(i) => handleClick(i)} />
        </div>
        <div className="game-info">
          <div className="status">{status}</div>
          <div className="step">{moves}</div>
        </div>
      </div>
    </Container>
  );
};

const Container = styled.div`
  .game {
    display: flex;
    gap: 32px;

    .game-info {
      .status {
        margin-bottom: 10px;
        font-weight: 600;
      }
      .step {
        div {
          background-color: #111;
          color: #eee;
          border: 1px solid #333;
          padding: 5px 10px;
          text-align: center;
          font-size: 14px;
          margin-bottom: 5px;
          cursor: pointer;
          &:hover {
            background-color: #eee;
            color: #111;
            border: 1px solid #eee;
          }
        }
      }
    }
  }
`;

function calculateWinner(squares) {
  const lines = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6],
  ];
  for (let i = 0; i < lines.length; i++) {
    const [a, b, c] = lines[i];
    if (squares[a] && squares[a] === squares[b] && squares[a] === squares[c]) {
      return squares[a];
    }
  }
  return null;
}

export default Game;

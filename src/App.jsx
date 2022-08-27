import React from "react";
import Board from "./components/Board.jsx"
import "./style/root.scss"
import SquareState from "./context/SquareState.jsx";
import NameBoardDiv from "./components/NameBoardDiv";
import Message from "./components/Message.jsx";
import ResetButton from "./components/ResetButton.jsx";

export default () => (
    <SquareState>
    <div className="app">
      <h1>TIC TAC TOE</h1>
        <NameBoardDiv />
        <ResetButton/>
        <Message />
          <Board class="board"/>
    </div>
    </SquareState>
);

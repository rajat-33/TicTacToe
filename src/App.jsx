import React from "react";
import Board from "./components/Board.jsx"
import "./style/root.scss"

export default () => (
  <div className="app">
    <h1>TIC TAC TOE</h1>
    <Board class="board"/>
  </div>
);

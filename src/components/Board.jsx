import React from "react";
import Sqaure from "./Square";

const Board=()=>{
    return(
        <div className="board">
            <div className="board-row">
                <Sqaure val={1}/>
                <Sqaure val={2}/>
                <Sqaure val={3}/>
            </div>
            <div className="board-row">
                <Sqaure val={4}/>
                <Sqaure val={5}/>
                <Sqaure val={6}/>
            </div>
            <div className="board-row">
                <Sqaure val={7}/>
                <Sqaure val={8}/>
                <Sqaure val={9}/>
            </div>
        </div>
    )
}

export default Board;
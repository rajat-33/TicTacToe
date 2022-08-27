import React from "react";
import Sqaure from "./Square";

const Board=()=>{

    return(
        <div className="board">
            <div className="board-row">
                <Sqaure ind={0}/>
                <Sqaure ind={1}/>
                <Sqaure ind={2}/>
            </div>
            <div className="board-row">
                <Sqaure ind={3}/>
                <Sqaure ind={4}/>
                <Sqaure ind={5}/>
            </div>
            <div className="board-row">
                <Sqaure ind={6}/>
                <Sqaure ind={7}/>
                <Sqaure ind={8}/>
            </div>
        </div>
    )
}

export default Board;
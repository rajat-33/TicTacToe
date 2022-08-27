import React, {useContext} from "react";
import SquareContext from "../context/SquareContext";
const Square=(props)=>{
    const x=useContext(SquareContext);
    
    return (
        <>
            <button className="square" onClick={()=>{x.changeSquare(props.ind)}}>{x.squares[props.ind]}</button>
        </>
    )
}

export default Square;
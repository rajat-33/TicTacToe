import React, { useContext } from "react";
import SquareContext from "../context/SquareContext";
const ResetButton=()=>{

    const x=useContext(SquareContext);

    return(
        <>
            <div className="resetBtnDiv">
                <button className="resetBtn" onClick={x.resetBoard}>Reset</button>
            </div>
        </>
    )
}

export default ResetButton;
import React, { useContext } from "react";
import SquareContext from "../context/SquareContext";

const Message=()=>{
    const x=useContext(SquareContext)

    return(
        <div className="message">{x.msg}</div>
    )
}

export default Message;
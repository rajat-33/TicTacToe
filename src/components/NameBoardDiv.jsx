import React, {useContext} from "react";
import NameBoard from "./NameBoard";
import SquareContext from "../context/SquareContext";

const NameBoardDiv=()=>{
    const x=useContext(SquareContext);

    const getColor=(id)=>{
        if((x.chanceCount-id+1)%2)
        {
            return "blue";
        }
        else
        {
            return "white";
        }
    }

    return(
        <div className="nameBoardDiv">
            <NameBoard id={1} bgColor={getColor(1)} />
            <NameBoard id={2} bgColor={getColor(2)} />
        </div>
    )
}

export default NameBoardDiv;
import React from "react";


const NameBoard=(props)=>{
    return(
        <>
            <div className="nameBoard" style={{background:props.bgColor}}>Player {props.id}</div>
        </>
    )
}

export default NameBoard;
import React, {useState} from "react";
import SquareContext from "./SquareContext";

const SquareState=(props)=>{
    const initSquares=Array(9).fill("");
    const [squares, setSquares]=useState(initSquares);
    const [chanceCount, setChanceCount]=useState(1);
    const [msg, setMsg]=useState("");

    const resetBoard=()=>{
        setMsg("");
        setSquares(initSquares);
        setChanceCount(1);
    }

    const getUser=()=>{
        if(chanceCount%2)
        {
            return "Player 1";
        }
        else
        {
            return "Player 2";
        }
    }

    const checkResult=()=>{
        let i, j, c, ind;
        for(i=0;i<3;i++)
        {
            ind=3*i;
            c=squares[ind];
            if(c!="")
            {
                for(j=1;j<3;j++)
                {
                    ind=3*i+j;
                    if(squares[ind]!=c)
                    {
                        j=3;
                    }
                    if(j==2)
                    {
                        setMsg(getUser()+" wins!");
                    }
                }
            }
        }

        for(j=0;j<3;j++)
        {
            ind=j;
            c=squares[ind];
            if(c!="")
            {
                for(i=1;i<3;i++)
                {
                    ind=3*i+j;
                    if(squares[ind]!=c)
                    {
                        i=3;
                    }
                    if(i==2)
                    {
                        setMsg(getUser()+" wins!");
                    }
                }
            }
        }

        c=squares[0];
        for(i=1;i<3;i++)
        {
            j=i;
            ind=3*i+j;
            if(squares[ind]!=c)
            {
                i=3;
            }
            if(i==2 && c!="")
            {
                setMsg(getUser()+" wins!");
            }
        }

        c=squares[6];
        for(i=1;i>=0;i--)
        {
            j=3-i-1;
            ind=3*i+j;
            if(squares[ind]!=c)
            {
                i=-1;
            }
            if(i==0 && c!="")
            {
                setMsg(getUser()+" wins!");
            }
        }
        if(chanceCount==9)
        {
            setMsg("Match Draw!");
        }
    }

    const changeSquare=(ind)=>{
        // console.log("hello click");
        if(squares[ind]==="")
        {
            if(chanceCount%2)
            {
                squares[ind]="X"
            }
            else
            {
                squares[ind]="O";
            }
            setChanceCount(chanceCount+1);
            setSquares(squares);
            checkResult();
        }
    }


    return(
        <SquareContext.Provider value={{squares, chanceCount, msg, changeSquare, resetBoard}}>
            {props.children}
        </SquareContext.Provider>
    )
}

export default SquareState;
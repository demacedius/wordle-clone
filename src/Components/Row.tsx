import { styled } from "@stitches/react";
import * as React from 'react';
import { WordleContext } from "../context/WordleContext";
import Square from "./Square";



const StyledRow = styled("div", {
    height: '100%',
    display:'flex',
    gap:'10px',
})

function Row(){


    const {word} = React.useContext(WordleContext);
    

    return (
        <StyledRow>
            <Square word={word[0]}/>
            <Square word={word[1]}/>
            <Square word={word[2]}/>
            <Square word={word[3]}/>
            <Square word={word[4]}/>
        </StyledRow>
    )
}

export default Row;
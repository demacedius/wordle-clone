import { styled } from "@stitches/react";
import * as React from 'react';
import { WordleContext } from "../context/WordleContext";
import Square from "./Square";

interface IRow{
    isActive: Boolean;
}

const StyledRow = styled("div", {
    height: '100%',
    display:'flex',
    gap:'10px',
});

function Row(props: IRow){


    const {word} = React.useContext(WordleContext);
    
    const getWord = (index: number) => {

        if(props.isActive){
            return word[index];
        }
        
        return '';
    };
    
    return (
        <StyledRow>
            {
                Array.from(Array(5).keys()).map((_, index) => (
                    <Square word={getWord(index)}/>
                ))}
        </StyledRow>
    );
}


export default Row;
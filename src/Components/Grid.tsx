import { styled } from "@stitches/react";
import Row from "./Row";

const StyledGrid = styled("div", {
    width:'350px',
    height:'420px',
    backgroundColor:'white', 
    display:'flex',
    flexDirection:'column',
    gap:'10px',
});

function Grid(){
    return(
        <StyledGrid>
            <Row />
            <Row />
            <Row />
            <Row />
            <Row />
            <Row />
        </StyledGrid>
    )
}

export default Grid;
import { styled } from '@stitches/react';
import Letter from './Letter';

interface ILetter {
  word: string,
};

const StyledSquare = styled("div",{
    height:'100%',
    flex: '1',
    display:'flex',
    alignItems:'center',
    justifyContent:'center',
    outline:'2px solid #d3d6da',
});

function Square (props: ILetter) {
  return (
    <StyledSquare>
        <Letter word={props.word}/>
    </StyledSquare>    
  );
}

export default Square;

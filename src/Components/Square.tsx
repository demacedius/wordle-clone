import { keyframes, styled } from '@stitches/react';
import Letter from './Letter';
import {bounce} from '../style/animation';

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
    transition:'.15s outline',
    variants:{
      isActive:{
        true:{
          outline:'2px solid #878a8c',
          animation:`${bounce} 200ms ease`,
          },
        },
      },
});

function Square (props: ILetter) {
  return (
    <StyledSquare isActive={!!props.word}>
        <Letter word={props.word}/>
    </StyledSquare>    
  );
}

export default Square;

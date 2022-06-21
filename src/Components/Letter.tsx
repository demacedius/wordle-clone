import { styled } from '@stitches/react';


interface ILetter {
    word: string,
};

const StyledLetter = styled('div',{
    fontFamily:'Arial',
    fontSize:'32px',
    fontWeight:'bold',
});
function Letter (props: ILetter) {
  return (
    <StyledLetter>{props.word}</StyledLetter>  
  );
}

export default Letter;
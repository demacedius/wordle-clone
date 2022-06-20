import { styled } from '@stitches/react';
import { propsToAttrMap } from '@vue/shared';
import * as React from 'react';

const StyledLetter = styled('div',{
    fontFamily:'Arial',
    fontSize:'32px',
    fontWeight:'bold',
});
function Letter () {
  return (
    <StyledLetter></StyledLetter>  
  );
}

export default Letter;
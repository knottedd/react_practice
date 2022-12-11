
import styled, { css } from "styled-components";

function Button( props ) {
  return (
    <StyledButton onClick={props.click} id={props.id} backgroundColor={props.bcolor} width={props.width} height={props.height} style={{color: "white"}}>
      {props.text}
    </StyledButton>
  );
}

Button.defaultProps = {
  width: '80%',
  height: '80%',
  
};


const StyledButton = styled.button`
  width:  ${(props) => props.width};
  height: ${(props) => props.height};
  background : ${(props) => props.backgroundColor};
  
`;

export default Button;

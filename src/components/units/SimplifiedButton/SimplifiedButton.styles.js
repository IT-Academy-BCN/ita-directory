import styled from "styled-components";
import Colors from "theme/Colors";

export const StyledButton = styled.button`
    box-shadow: 0px 2px 4px #00000029;
    border: none;
    border-radius: 6px;
    opacity: 1;
    cursor: pointer;
    text-align: center;
    font: normal normal normal 8px Helvetica Neue;
    letter-spacing: 0px;
    width: 4rem;
    height: 1rem;
    margin-right: 9rem;
    text-align: center;
    background: transparent
        linear-gradient(98deg, ${Colors.lightBlue} 0%, ${Colors.darkBlue} 100%) 0% 0% no-repeat;
     color: ${Colors.white};
     &:hover{
    color: ${Colors.redColor}
}
    
`;


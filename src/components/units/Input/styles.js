import styled, { css } from "styled-components";
import Colors from "theme/Colors";

const StyledInput = styled.input`
    top: 301px;
    left: 492px;
    width: 297px;
    height: 40px;
    border-radius: 6px;
    opacity: 1; 
    &.success{
        background: #FFFFFF 0% 0% no-repeat padding-box;
        border: 1px solid "#DDDDDD";
        
    }
   &.registration {
    background: #E7EBF0 0% 0% no-repeat padding-box;
   }
   &.error {
    border: 1px solid ${Colors.redColor};
   }
    ` ; 

    export default StyledInput;
    
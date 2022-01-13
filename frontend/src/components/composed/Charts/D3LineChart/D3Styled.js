import styled from 'styled-components'
import Colors from 'theme/Colors'

export const MySvg = styled.svg`
    margin: auto;
    .toolLine{
        stroke: #a5a5a5;
        stroke-width: 1px;
        fill: none;
    }
    .tooltip{
        background-color: red;
    }    
    .line, .circle {
        animation-name: lines;
        animation: fadeIn ease-in 1s;
        width: 10px;
    }

   .tick line{
       opacity: 0.2;
   }

   text{    
       font-size: 0.8rem;
       color: ${Colors.lightGrey};

       @media(max-width: 615px){
           font-size: 0.6rem;
       }      
   }

   @keyframes lines {
       0% {left: 0%}
       50% {left: 50%}
       100% {right: 100%}
   }   
`




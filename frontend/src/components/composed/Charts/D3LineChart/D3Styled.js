import styled from 'styled-components'
import Colors from 'theme/Colors'

export const MySvg = styled.svg`
    height: 100%;
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

  	

   
`
import styled from 'styled-components'
import Colors from 'theme/Colors'

export const MySvg = styled.svg`
    
   .tick line{
       opacity: 0.2;
   }

   text{
       font-size: 0.8rem;
       color: ${Colors.lightGrey};
   }

  	@media (min-width: 1400px) {
			min-height: 250px;
            margin-right: 10px;
		}

   
`
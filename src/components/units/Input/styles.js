import styled from 'styled-components'
import Colors from 'theme/Colors'

const StyledInput = styled.input`
    top: 1rem;
    width: 18.6rem;
    height: 2.6rem;
    border-radius: 6px;
    margin: 0.4rem 0 0.4rem 0;
    opacity: 1;
    outline: none;
    border: 1px solid #dddddd;
    text-align: left;
    font: normal normal normal 16px/32px Helvetica Neue;
    letter-spacing: 0px;
    color: #393939;
    opacity: 1;
    &.error {
        border: 1px solid ${Colors.redColor};
        color: #7d868b;
    }
`

export default StyledInput

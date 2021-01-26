import styled from 'styled-components'
import Colors from 'theme/Colors'

export const StyledForm = styled.form`
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    background: #FFFFFF 0% 0% no-repeat padding-box;
    box-shadow: 0px 3px 6px #00000029;
    border: 1px solid #E2E2E2;
    border-radius: 6px;
    opacity: 1;
    padding: 1rem;
    margin: 1rem;
    width: 22rem;
    height: 14rem;
`
export const StyledError = styled.div`
  color: ${Colors.redColor}
  font-weight: 800;
  margin: 0 0 40px 0;
`

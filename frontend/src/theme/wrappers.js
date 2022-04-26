import styled from 'styled-components'

const Container = styled.div`
  width: 100%;
  max-width: 85%;
  margin: 0 auto;
  display: flex;
  justify-content: center;
  flex-direction: ${(props) => (props.column ? 'column' : 'row')};
`

const Grid = styled.div``

export { Container, Grid }

import styled from 'styled-components'
import { flexbox, grid, space, color, layout } from 'styled-system'
import { device } from './mediaQueries'

const Container = styled.div`
  width: 100%;
  max-width: 85%;
  margin: 0 auto;
  display: flex;
  justify-content: center;
  flex-direction: ${(props) => (props.column ? 'column' : 'row')};
`

const Box = styled.div`
  ${space}
  ${color}
  ${layout}
`

const FlexBox = styled.div`
  display: flex;
  ${flexbox}
  padding: ${({ padding }) => (padding ? '1rem 1.5rem' : '0rem')}
`

const Grid = styled.div`
  display: grid;
  ${grid}
  @media ${device.Tablet} {
    grid-template-columns: repeat(2, 1fr);
  }

  @media ${device.Laptop} {
    grid-template-columns: repeat(3, 1fr);
  }
`

export { Container, Grid, FlexBox, Box }

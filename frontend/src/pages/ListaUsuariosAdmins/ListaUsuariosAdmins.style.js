import styled from 'styled-components'
import { device, colors } from '../../theme'

export const StyledTableWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  margin: 20px 0px;
  font: normal normal normal 6px/18px Arial;
  width: 100%;
  border-radius: 10px;
  border: 0px 1px 1px 1px solid ${colors.maroon};
  box-shadow: 1px 4px 8px 0 ${colors.shadow}, 1px 6px 20px 0 ${colors.lighterShadow};
  flex-wrap: nowrap;
  padding: 0.5rem 1.8rem;

  @media only ${device.Tablet} {
    font: normal normal normal 14px/18px Arial;
  }

  .actions-column {
    display: flex;
    align-items: center;
    justify-content: flex-end;

    button {
      width: 42px;
      height: 42px;
      display: flex;
      align-items: center;
      justify-content: center;
      background-color: transparent;
      border: none;

      svg {
        font-size: 20px;
      }
    }
  }
`

export const StyledImage = styled.img`
  border-radius: 50%;
`

export const StyledCell = styled.div`
  display: flex;
  align-items: center;
  justify-content: ${(props) => (props.justify ? props.justify : 'start')};
  color: ${(props) => props.color};
  font-weight: bold;
  font-size: 14px;
  padding: 10px 0px;
  padding-left: ${(props) => props.paddingL};
`

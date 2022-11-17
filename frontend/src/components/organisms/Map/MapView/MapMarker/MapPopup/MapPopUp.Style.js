import styled from 'styled-components'
import { colors } from '../../../../../../theme'

export const PopupStyled = styled.div`
  display: flex;
  border-radius: 6px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.25);

  img {
    width: 100%;
    object-fit: cover;
    border-radius: 6px;
  }
`

export const Content = styled.div`
  display: flex;
  width: 100%;
  flex-direction: column;
`

export const Address = styled.div`
  font-size: 16px;
  color: #666;
  p {
    margin: 5px 0;
  }
`

export const PropertyData = styled.div`
  display: flex;
  align-items: flex-start;
  flex-wrap: wrap;
  flex-direction: column;
  margin-bottom: 10px;

  .property-data-extra {
    display: flex;
    flex-direction: row;
  }
`

export const Span = styled.div`
  font-size: 14px;
  font-weight: normal;
  margin: 5px 10px 5px 0;
`

export const Price = styled.div`
  color: ${colors.darkOrange};
  font-weight: bold;
  font-size: 16px;
`

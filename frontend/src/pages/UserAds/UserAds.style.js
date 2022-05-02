import styled from 'styled-components'
import { colors } from '../../theme'

export const StyledUserAds = styled.div`
  display: flex;
  flex-direction: column;
  padding-top: 3rem;
`

export const StyledCard = styled.div`
  padding-top: 1rem;
  padding-bottom: 0.75rem;

  .cardContainer {
    background: ${colors.white};
    box-shadow: none;
    border: none;
    border-radius: 0;
    border-bottom: 1px solid ${colors.grey};
    padding-bottom: 2rem;

    & > div:last-of-type {
      padding-bottom: 0;
      padding-left: 2.5rem;
    }
  }

  &:last-of-type {
    .cardContainer {
      border: none;
    }
  }

  .descriptionContainer {
    justify-content: flex-start;

    > label {
      margin-right: 1rem;
    }
  }
  .titleClassName {
    text-align: left;
    color: ${colors.darkRed};
    font: normal normal normal 24px/32px Korb-Bold;
    letter-spacing: 0px;
    opacity: 1;
  }
`

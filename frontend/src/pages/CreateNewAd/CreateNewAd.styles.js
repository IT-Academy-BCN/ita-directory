import styled from 'styled-components'
import { device, colors } from '../../theme'

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;

  padding-left: 0vw;
  padding-right: 0vw;

  padding: 0.1rem;
  border-radius: 0.5em;
  margin-bottom: 2rem;

  label {
    flex-basis: 50px;
    padding: 5px;
  }

  @media ${device.Tablet} {
    padding-left: 5vw;
    padding-right: 5vw;

    label {
      flex-basis: 50px;
      padding: 5px;
    }
  }

  form > div {
    display: flex;
    flex-direction: column;
    text-align: start;
    justify-content: start;
    align-items: start;
    margin-bottom: 1rem;

    @media ${device.Tablet} {
      flex-direction: row;
    }

    > div {
      min-width: 10rem;

      &:last-of-type {
        // mapa
        width: 100%;

        & > div > div {
          background-color: white;
        }
      }

      &:not(.form-label) > label {
      }

      &:not(:first-of-type) {
        width: 26rem;
        textarea {
          border-color: ${colors.lightGrey};
        }
      }

      &.form-label label {
        color: ${colors.grey};
        font-weight: bold;

        @media ${device.Tablet} {
          color: ${colors.grey};
        }
      }
      & {
      }
    }

    .form-label {
      display: flex;
      flex-direction: column;
      align-items: start;
    }
    .style-input-create-new-ad {
      width: 20rem;
    }
    .inputsContainer {
      height: 2.6rem;
      & > div {
        width: 25rem;
        margin-top: 1.5rem;
      }
    }

    .input-container {
      margin-top: 0;
    }
    .textarea {
      margin-left: 0.4rem;
      border: 1px solid ${colors.lightGrey};
      border-radius: 4px;
      width: 30rem;
      margin-bottom: 1rem;
    }
  }
`

export const MapText = styled.p`
  margin-top: 3%;
  font-style: italic;
  color: grey;
  font-size: 12px;
`

export const MapBox = styled.div`
  width: 100%;
  justify-content: center;
`

export const CsvNotificationError = styled.div`
  background-color: #d47982;
  text-align: center;
  font-style: italic;
  color: white;
`

export const CsvNotificationSuccess = styled.div`
  background-color: #91d479;
  text-align: center;
  font-style: italic;
  color: white;
`

export const HeaderContent = styled.div`
  background-color: green;
  color: blue;
  font-size: 1.4em;
  display: block;
  width: 100%;
`

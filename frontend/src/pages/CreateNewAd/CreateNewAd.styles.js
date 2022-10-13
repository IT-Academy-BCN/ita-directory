import styled from 'styled-components'
import { device, colors } from '../../theme'

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin-top: 1.4rem;

  background-color: ${colors.extraLightGrey};

  input.style-input-create-new-ad {
    &:hover {
    }
    &.error {
    }
    &:focus {
    }
  }

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
    justify-content: center;
    text-align: start;
    flex-direction: column;
    align-items: flex-start;
    margin-bottom: 1rem;

    /* just propose of design, it must be deleted 👇 */
    border: 2px solid green;
    /* ******************************************** */

    @media ${device.Tablet} {
      flex-direction: row;
    }

    > div {
      min-width: 10rem;

      /* just propose of design, it must be deleted 👇 */
      margin: 5px;
      border: 1px solid red;
      /* ******************************************** */

      &:hover {
      }
      &.error {
      }
      &:focus {
      }

      &:last-of-type {
        // mapa
        width: 100%;

        & > div > div {
          background-color: white;
        }
      }

      &:not(.form-label) > label {
        display: none;
      }

      &.form-label svg {
        margin-right: 0.5rem;
      }

      /* &:not(:first-of-type) {
        width: 100%;
        input,
        textarea {
          border-color: ${colors.grey};
        }
      } */

      &.form-label label {
        // flex-basis: 10px;
        color: ${colors.grey};
        width: 90%;
        text-align: center;
        font-weight: bold;

        @media ${device.Tablet} {
          flex-basis: 150px;
          color: ${colors.grey};
          width: 10rem;
          font-weight: bold;
        }
      }
    }

    &.inputsContainer {
      & div {
      }
    }

    .input-container {
      margin-top: 0;
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

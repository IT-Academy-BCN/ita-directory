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
  background-color: #f7f7f7;
  border-radius: 0.5em;
  margin-bottom: 2rem;

  .style-input-create-new-ad {
    /* border: 1px solid #707070; */
    border-radius: 0;
    /* border-bottom: 1px solid ${colors.transparent}; */
    border-bottom: 1px solid ${colors.lightGray};
  }

  input.style-input-create-new-ad {
    border: none;
    border-bottom: 1px solid ${colors.lightGray};
    padding: 0.3rem 0.5rem;

    &:hover {
      border-radius: 1rem;
      border-bottom: 1px solid ${colors.redPink};
    }
    &.error {
      border-bottom: 1px solid #fecaca !important;
    }
    &:focus {
      outline: 0 none;
      border-radius: 1rem;
      border-bottom: 1px solid ${(props) => (props.error ? 'red' : colors.darkBlue)} !important;
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

  form div {
    /* display: flex;
		flex-direction: column;
		justify-content: center;
		align-self: center;
		width: 98%; */
  }

  form > div {
    display: flex;
    justify-content: center;
    text-align: start;
    flex-direction: column;
    align-items: center;
    margin-bottom: 1rem;

    @media ${device.Tablet} {
      flex-direction: row;
    }

    > div {
      min-width: 10rem;
      /* border-bottom: 1px solid ${colors.lightGray};

			&:hover {
				border-radius: 1rem;
				border-bottom: 1px solid ${colors.redPink};
			}
			&.error {
				border: 1px solid #fecaca !important;
			}
			&:focus {
				outline: 0 none;
				border-radius: 1rem;
				border: 1px solid ${(props) => (props.error ? 'red' : colors.darkBlue)} !important;
			} */

      /* width: 100%; */

      &:last-of-type {
        // mapa
        width: 100%;

        & > div > div {
          background-color: white;
        }
      }

      &:not(.form-label) > label {
      }

      &.form-label svg {
        margin-right: 0.5rem;
      }

      &:not(:first-of-type) {
        width: 20rem;

        input,
        textarea {
          border-color: #707070;
        }
      }

      &.form-label label {
        flex-basis: 10px;
        color: #707070;
        width: 90%;
        text-align: center;
        font-weight: bold;

        @media ${device.Tablet} {
          flex-basis: 150px;
          color: #707070;
          width: 10rem;
          font-weight: bold;
        }
      }
    }

    /* &.inputsContainer {
			& div {
				border: 1px solid #707070;
			}
		} */

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

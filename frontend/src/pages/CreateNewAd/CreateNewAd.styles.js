import styled from 'styled-components'
import { device, colors } from '../../theme'

export const Wrapper = styled.div`
  margin-top: 1.4rem;

  .style-input-create-new-ad {
    width: 18.6rem;
    height: 2.6rem;
    /* it must be deleted 👇: just design proposal */
    /* background-color: chocolate; */
    /* ******************************************** */
  }

  form > div {
    display: flex;
    justify-content: start;
    text-align: start;
    align-items: flex-start;
    margin-bottom: 1rem;

    /* it must be deleted 👇: just design proposal */
    /* background-color: beige;
    border: 2px solid green; */
    /* ******************************************** */

    @media ${device.Tablet} {
      flex-direction: row;
    }

    label {
      text-align: start;
      font-weight: bold;
      letter-spacing: 0.1rem;
      /* it must be deleted 👇: just design proposal */
      /* border: 2px solid powderblue;
      background-color: powderblue; */
      /* ******************************************** */

      @media ${device.Tablet} {
        flex-basis: 150px;
        color: ${colors.grey};
        width: 10rem;
        font-weight: bold;
      }
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

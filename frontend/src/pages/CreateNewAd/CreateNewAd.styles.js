import styled from 'styled-components'
import { device, colors } from '../../theme'

export const Wrapper = styled.div.attrs({ id: 'Wrapper' })`
  margin-top: 1.4rem;
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  .style-input-create-new-ad {
    width: 18.6rem;
    height: 2.6rem;
    /* it must be deleted 👇: just design proposal */
    /* background-color: chocolate; */
    /* ******************************************** */
  }

  form > div {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    margin-bottom: 1rem;
    color: ${colors.grey};

    @media ${device.Tablet} {
      display: flex;
      flex-direction: row;
      justify-content: start;
      align-items: flex-start;
      text-align: start;
      margin-bottom: 1rem;
    }
    & > div {
          display: flex;
          flex-direction: column;
          align-items: start;
          @media ${device.Tablet} {
            display: flex;
            flex-direction: row;
            justify-content: start;
            align-items: flex-start;
            text-align: start;
            margin-bottom: 1rem;
          }

    /* it must be deleted 👇: just design proposal */
    /* background-color: beige;
    border: 2px solid green; */
    /* ******************************************** */

    label {
      text-align: start;
      font-weight: bold;
      letter-spacing: 0.1rem;
      display: block;
      margin-bottom: 0.3rem;
      @media ${device.Tablet} {
        width: 12rem;
      }
      /* it must be deleted 👇: just design proposal */
      /* border: 2px solid powderblue;
      background-color: powderblue; */
      /* ******************************************** */
    }

  }
  /* form > div > div {
    display: flex;
    flex-direction: column;
    align-items: start;
    @media ${device.Tablet} {
      display: flex;
      flex-direction: row;
      justify-content: start;
      align-items: flex-start;
      text-align: start;
      margin-bottom: 1rem;
    }
  } */
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

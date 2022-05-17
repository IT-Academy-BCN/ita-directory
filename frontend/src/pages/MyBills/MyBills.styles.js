import styled from 'styled-components'
import { device, colors } from '../../theme'

export const MyTableStyle = styled.table`
  display: flex;
  flex-direction: row;
  justify-content: center;
  font-size: 10px;
  margin: 0px;
  width: 100%;
  height: 100%;
  max-width: 85%;
  border: 0px 1px 1px 1px solid ${colors.grey};

  padding: 0.1rem;
  background-color: ${colors.extraLightGrey};
  border-radius: 0.5em;
  margin-bottom: 2rem;

  @media ${device.Tablet} {
    width: 100%;
    max-width: 75%;
    flex-direction: column;
    margin-bottom: 20px;
    padding: 2rem;
    /* font: normal normal normal 6px/18px Arial; */
  }
  @media ${device.Laptop} {
    width: 100%;
    max-width: 70%;
    padding: 3rem;
  }

  button {
    width: 42px;
    height: 42px;
    display: flex;
    align-items: center;
    justify-content: center;
    background-color: transparent;
    border: none;

    svg {
      font-size: 17px;
    }
  }

  table {
    justify-self: center;
    font-size: 8px;
    width: 85%;
    margin: 0 auto;
    /* margin: 0;
		padding: 0; */
    height: 20px;
    transform: scale(0.8);

    @media ${device.Tablet} {
      width: 100%;
      max-width: 85%;
      font-size: 8px;
      transform: scale(1);
    }
    @media ${device.Laptop} {
      width: 100%;
      max-width: 75%;
      font-size: 10px;
    }
  }
`

export const StyledDiv = styled.div`
  color: ${(props) => props.color};
  font-size: 12px;
  text-align: center;
  font-weight: bold;
  padding: 8px 0px;
  padding-left: ${(props) => props.paddingL};

  @media ${device.Tablet} {
    font-size: 14px;
  }
  @media ${device.Laptop} {
    font-size: 1rem;
  }
`

export const RowTableStyle = styled.div`
  color: ${(props) => props.color};
  font-size: 11px;
  justify-content: center;
  text-align: center;
  font-weight: bold;
  padding: 10px 0px 10px 4px;

  padding-left: ${(props) => props.paddingL};

  @media ${device.Tablet} {
    font-size: 14px;
  }
  @media ${device.Laptop} {
    font-size: 1rem;
  }
`

export const HeaderTableStyle = styled.div`
  color: ${(props) => props.color};
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  font-size: 0.85rem;
  text-align: center;
  font-weight: bold;
  padding: 5px 4px;
  padding-left: ${(props) => props.paddingL};

  @media ${device.Tablet} {
    font-size: 1.1rem;
  }
  @media ${device.Laptop} {
    font-size: 1.2rem;
  }
`

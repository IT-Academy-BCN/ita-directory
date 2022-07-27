import styled from 'styled-components'
import { device, responsiveSizes } from '../../../theme'

export const ContainerExterior = styled.div`
  width: 100%;
  max-width: ${responsiveSizes.desktop};
  margin: inherit auto;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: start;
  position: relative;
  flex-direction: column-reverse;

  @media ${device.Tablet} {
    flex-wrap: wrap;
    justify-self: center;
    margin-right: auto;
    margin-left: auto;
  }
  @media ${device.Desktop} {
    flex-wrap: nowrap;
    flex-direction: column;
  }
`

export const Container = styled.div`
  width: 100%;
  display: flex;
  gap: 0.1rem;
  justify-content: center;
  align-items: flex-start;
  align-content: flex-start;
  flex-wrap: nowrap;
  margin: 2rem 0 6rem 0;
  flex-direction: row;
  flex-wrap: wrap;

  @media ${device.Tablet} {
    flex-direction: row;
    flex-wrap: wrap;
  }
  @media ${device.Desktop} {
    justify-content: space-between;
    gap: 0.5rem;
    flex-wrap: nowrap;
  }
  @media ${device.LaptopLg} {
    justify-content: space-around;
  }
`

export const GridItem = styled.div`
  width: 50%;
  display: contents;
  z-index: 10;

  @media ${device.Tablet} {
    width: 25%;
  }
  @media ${device.Desktop} {
    display: block;
  }
`

export const Mapa = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;

  @media ${device.Tablet} {
    display: flex;
    justify-content: center;
    align-items: center;
  }
  @media ${device.Desktop} {
    position: absolute;
    top: calc(50% - 20%);
    left: calc(50% - 42%);
    width: 80%;
  }
  @media ${device.LaptopLg} {
    position: absolute;
    top: calc(50% - 25%);
    left: calc(50% - 45%);
  }
`

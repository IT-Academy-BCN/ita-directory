import styled from 'styled-components'

export const ContainerExterior = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`

export const Container = styled.div`
  max-width: 1090px;
  display: flex;
  flex-wrap: wrap;
  justify-content: start;
  align-items: flex-start;
  align-content: flex-start;
  margin-top: 3rem;

  @media screen and (max-width: 1151px) {
    justify-content: space-between;
  }
`

export const GridItem = styled.div`
  width: 15.8rem;

  @media screen and (max-width: 375px) {
    width: 12rem;
  }
`

export const Mapa = styled.div`
  position: relative;
  top: -27rem;
  left: -2rem;

  @media screen and (max-width: 1534px) {
    top: -56rem;
    left: 2rem;
  }
  @media screen and (max-width: 1440px) {
    top: -54rem;
    left: 4rem;
  }
  @media screen and (max-width: 1151px) {
    top: -63rem;
    left: 6rem;
  }
  @media screen and (max-width: 1050px) {
    top: -62rem;
    left: 6rem;
  }
  @media screen and (max-width: 980px) {
    top: -57rem;
    left: 7rem;
  }
  @media screen and (max-width: 770px) {
    top: -56rem;
  }
  @media screen and (max-width: 767px) {
    top: 0rem;
    left: 0rem;
  }
`

import styled from 'styled-components'
import colors from '../../../../theme/colors'
import SelectArrow from '../../../../assets/images/select-arrow.svg'

const PieGraphicStyled = styled.div`
  width: 100%;
  min-height: calc(90vh - 10rem - 100px);
  box-shadow: 0px 3px 6px #00000029;
  border: 1px solid #ddd;
  border-radius: 6px;
  overflow: hidden;
  background: ${colors.white};

  .cardHeader {
    display: flex;
    width: 100%;
    height: 50%;
    background-color: #e22e2e;
    flex-direction: column;
    align-items: center;
    justify-content: space-between;
    padding-bottom: 1rem;

    @media (min-width: 768px) {
      flex-direction: row;
      padding: 0.5rem 2rem;
    }

    h2 {
      font-weight: 400;
      color: white;
      font-size: 20px;
      margin: 0px 5px;
    }

    .selectorWrapper {
      display: flex;
      align-items: center;

      select {
        -webkit-appearance: none;
        -moz-appearance: none;
        appearance: none;
        margin-right: 0.3rem;
        padding-left: 0.5rem;
        width: 110px;
        height: 30px;
        box-shadow: 0 3px 6px #00000029;
        border: none;
        border-radius: 4px;
        color: #e22e2e;
        background-image: url(${SelectArrow});
        background-position: 95% 50%;
        background-repeat: no-repeat;
        background-size: 15px 12px;
        background-color: #fff;
        @media (max-width: 768px) {
          width: 90px;
        }
      }

      button {
        display: inline-flex;
        height: 35px;
        width: 35px;
        align-items: center;
        justify-content: center;
        border-radius: 90px;
        color: #e22e2e;
        background: #fff;
        border: none;
        cursor: pointer;
      }
    }
  }

  .cardBody {
    width: 100%;
    height: 45vh;
  }
  .cardBodyModal {
    width: 100%;
    height: 85vh;
  }

  .chart {
    width: 100%;
    height: 100%;
    position: relative;
  }

  .pie-chart-d3 {
    position: absolute;
    width: 100%;
    height: 100%;
  }
`
export default PieGraphicStyled

// La etiqueta select afecta a los selectores de los modals
// La class chart hace referencia a las propiedades dentro de la gráfica

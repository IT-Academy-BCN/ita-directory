import styled from 'styled-components'

const FilterListStyled = styled.div`
  font-family: Arial, bold;
  background: #f4f4f4 0% 0% no-repeat padding-box;
  box-shadow: 0px 3px 6px #00000029;
  border-radius: 6px;
  opacity: 1;
  padding: 10px;
  &.styleFilter {
    margin-right: 20px;
    height: 370px;
  }

  h3 {
    text-align: left;
    font: normal normal bold 14px/21px Arial;
    letter-spacing: 0;
    color: #404040;
    opacity: 1;
    border-bottom: 1px solid currentColor;
    margin-top: 0;
    padding-bottom: 2px;
  }

  label {
    text-align: left;
    font: normal normal normal 13px/21px Arial;
    letter-spacing: 0;
    color: #6c6c6c;
    opacity: 1;
  }

  .styledContainerInputs {
    display: flex;
  }

  .styledContainerCheckbox {
    display: flex;
    margin-top: 10px;

    .styledCheckbox {
      background: #ffffff 0% 0% no-repeat padding-box;
      border: 1px solid #707070;
      opacity: 1;
      width: 21px;
      height: 21px;
      margin-right: 10px;
    }
  }
`
export default FilterListStyled

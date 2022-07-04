import styled from 'styled-components'
import { colors } from '../../../theme'

export const UserModalStyled = styled.div`
  margin-bottom: 25px;
  p {
    color: ${colors.lightGray};
    width: auto;
    letter-spacing: 0px;
    opacity: 1;
    font-size: 16px;
    width: 90%;
    margin-bottom: 15px;
  }

  label {
    display: none;
  }

  select {
    text-transform: uppercase;
    padding: 0.5em;
    font-size: 20px;
    border-radius: 5px;
    font-weight: bold;
    width: 100%;

    color: ${(props) =>
      // eslint-disable-next-line no-nested-ternary
      props.currentUserState === ('rejected' || 3)
        ? colors.redColor
        : props.currentUserState === ('aprobado' || 1)
        ? colors.darkGreen
        : colors.grey};

    border-color: ${(props) =>
      // eslint-disable-next-line no-nested-ternary
      props.currentUserState === ('rejected' || 3)
        ? colors.redColor
        : props.currentUserState === ('aprobado' || 1)
        ? colors.darkGreen
        : colors.grey};

    option {
      text-transform: uppercase;
    }
    option.aprobado {
      color: ${colors.darkGreen};
    }
    option.pending {
      color: ${colors.grey};
    }
    option.rejected {
      color: ${colors.redColor};
    }
  }
`

// export const StyledOption = styled.option``;

// export const StyledSelect = styled.select`
// 	font-size: 20px;
// 	color: ${(props) => (props.value = 1 ? colors.darkGreen : colors.darkRed)};
// 	border-color: ${(props) => (props.value = 1 ? colors.darkGreen : colors.darkRed)};
// 	padding: 10px;
// 	border-radius: 5px;
// 	font-weight: bold;
// 	width: 100%;
// `;

export const ButtonWrapper = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  border-top: 1px solid ${colors.lightGray};
`

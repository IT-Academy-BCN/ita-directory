import styled from 'styled-components'
import { device, colors } from '../../../theme'

export const SearchBarContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  @media only ${device.Tablet} {
    margin: 0;
    flex-direction: row;
    justify-content: ${(props) => (props.isLoading === 1 ? 'center' : 'flex-start')};
    align-items: center;
  }

  .header-select {
    width: 100%;
    margin-bottom: 0.5rem;

    @media only ${device.Tablet} {
      margin-bottom: 0;
      margin-right: 0.5rem;
      width: 35%;
    }
  }

  .header-button {
    width: 100%;
    margin: 0;

    @media only ${device.Tablet} {
      width: 2.4rem;
      height: 2.4rem;
      padding: 0;
    }
  }

  .spinner {
    width: 2.5rem;
    height: 2.5rem;
    color: ${colors.frenchBlue};

    animation-name: fullRotation;
    animation-duration: 2s;
    animation-iteration-count: infinite;
    @keyframes fullRotation {
      from {
        transform: rotate(0deg);
        width: 0.5rem;
      }
      to {
        width: 1;
        transform: rotate(360deg);
      }
    }
    @media only ${device.Tablet} {
      width: 2.5rem;
      height: 2.5rem;
    }
  }
`

export const customStyles = {
  option: (provided) => ({
    ...provided,
    ':hover': {
      cursor: 'pointer',
    },
  }),
  control: (provided) => ({
    ...provided,
    ':hover': {
      cursor: 'text',
    },
  }),
}

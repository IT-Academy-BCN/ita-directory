import styled from 'styled-components'

// eslint-disable-next-line import/prefer-default-export
export const AdCardItemStyled = styled.div`
  border-radius: 6px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.25);
  width: 100%;
  img {
    width: 100%;
    height: 175px;
    object-fit: cover;
    border-radius: inherit;
    :hover {
      cursor: pointer;
    }
  }
  .description {
    padding: 1rem 1.5rem;
  }
  .itemsInLine {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 1rem 1.5rem;
  }
  span.price {
    font-weight: bold;
    font-size: 18px;
  }
`

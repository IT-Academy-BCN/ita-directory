import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import { colors } from '../../../theme'
import casaPiscinaAd from '../../../assets/images/casaPiscinaAd2.jpg'
import Button from '../../atoms/Button'

const AdCardItemStyled = styled.div`
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

function AdCardItem({ ad, openSelectedAdPopup }) {
  return (
    <AdCardItemStyled>
      <img src={casaPiscinaAd} alt="" />
      <p className="description">{ad.description}</p>
      <div className="itemsInLine">
        <span className="price">{`${ad.price}€`}</span>{' '}
        <Button
          buttonStyles={{ backgroundColor: colors.violet }}
          type="button"
          text="Localizar"
          onClick={openSelectedAdPopup}
        />
      </div>
    </AdCardItemStyled>
  )
}

AdCardItem.propTypes = {
  ad: PropTypes.object,
  openSelectedAdPopup: PropTypes.string,
}

export default styled(AdCardItem)``

import React from 'react'
import PropTypes from 'prop-types'
import Colors from '../../../theme/Colors'
import casaPiscinaAd from '../../../assets/images/casaPiscinaAd2.jpg'
import Button from '../../atoms/Button/Button'
import { AdCardItemStyled } from './AdCardItem.styles'
import AdCardContainer from './AdCardContainer'

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

export default AdCardItem

import React, { useState } from 'react'
import PropTypes from 'prop-types'
import { useHistory } from 'react-router-dom'
import { faComments } from '@fortawesome/free-solid-svg-icons'
import Button from '../../../components/atoms/Button/Button'
import { colors } from '../../../theme'
import ContactModal from '../../../components/organisms/ContactModal/ContactModal'
import casaPiscinaAd from '../../../assets/images/casaPiscinaAd2.jpg'

// Styles
import { AdCardStyled } from './AdCard.style'

function AdCard({
  title,
  city,
  mapLon,
  mapLat,
  userId,
  price,
  squareMeters,
  description,
  nRooms,
  nBathrooms,
  id,
}) {
  const [active, setActive] = useState(false)

  const gastosIncluidos = true

  const history = useHistory()

  const handleClick = () => {
    history.push(`ad/${id}`)
  }
  return (
    <AdCardStyled>
      <img src={casaPiscinaAd} alt="" height={175} width={200} onClick={() => handleClick()} />
      <div className="content">
        <div className="content-text">
          <p className="address">{`${title} en ${city}`}</p>
          <div className="property-data">
            <span className="price">{price} €</span>
            <span>{nRooms} habitaciones</span>
            <span>{squareMeters}m2</span>
            <span>Gastos {gastosIncluidos ? ' incluidos' : ' no incluidos'}</span>
          </div>
          <div className="description">&quot;{description}&quot;</div>
          <Button
            buttonStyles={{
              display: 'flex',
              alignItems: 'center',
              width: '7.5rem',
              height: '2.2rem',
              marginTop: 'auto',
              fontSize: '1.125rem',
              fontFamily: 'Arial',
              color: colors.strongBlue,
              background: 'transparent',
              boxShadow: 'none',
              paddingLeft: '0',
            }}
            text="Contactar"
            type="button"
            icon={faComments}
            iconPosition="left"
            iconStyles={{
              marginRight: 5,
              paddingLeft: 0,
            }}
            onClick={() => setActive(true)}
          />
        </div>
      </div>
      <ContactModal active={active} hideModal={() => setActive(false)} />
    </AdCardStyled>
  )
}

AdCard.propTypes = {
  title: PropTypes.string.isRequired,
  city: PropTypes.string.isRequired,
  mapLon: PropTypes.number.isRequired,
  mapLat: PropTypes.number.isRequired,
  userId: PropTypes.number.isRequired,
  price: PropTypes.number.isRequired,
  squareMeters: PropTypes.number.isRequired,
  description: PropTypes.string.isRequired,
  nRooms: PropTypes.number.isRequired,
  nBathrooms: PropTypes.number.isRequired,
  id: PropTypes.number.isRequired,
}

export default AdCard

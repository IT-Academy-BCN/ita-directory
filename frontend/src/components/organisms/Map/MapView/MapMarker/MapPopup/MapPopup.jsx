import React, { useState } from 'react'
import PropTypes from 'prop-types'
import { Popup } from 'react-leaflet'
import { faComments } from '@fortawesome/free-solid-svg-icons'
import { ContactModal } from '../../../..'

// Styles
import { PopupStyled, Content, Address, PropertyData, Span, Price } from './MapPopUp.Style'
import { colors } from '../../../../../../theme'
import { Button } from '../../../../../atoms'

function MapPopup({ data }) {
  const newData = data
  // aqui borré ContactPerson y contactPhone porque no hay datos iguales en el json
  // https://api-casas.kevinmamaqi.com/api-casas
  const { price, image, name, habitaciones, m2, gastosIncluidos } = newData
  const [active, setActive] = useState(false)
  return (
    <>
      <Popup>
        <PopupStyled>
          <img src={`${import.meta.env.REACT_APP_STATIC_FILES_URL}/${image}`} alt={name} />
        </PopupStyled>
        <Content>
          <PropertyData>
            <Address>
              <p>{name}</p>
            </Address>
            <Price>{Number(price.toFixed(2)).toLocaleString()} €/mes</Price>
            <div className="property-data-extra">
              <Span>Gastos {gastosIncluidos ? ' incluidos' : ' no incluidos'}</Span>
              <Span>{habitaciones} habitaciones </Span>
              <Span>{m2} m2</Span>
            </div>
          </PropertyData>
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
        </Content>
      </Popup>
      <ContactModal active={active} hideModal={() => setActive(false)} />
    </>
  )
}

MapPopup.propTypes = {
  data: PropTypes.object,
}

export default MapPopup

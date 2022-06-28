import React, { useState } from 'react'
import PropTypes from 'prop-types'
import { Popup } from 'react-leaflet'

// Styles
import { PopupStyled, Content, Address, PropertyData, Span, Price } from './MapPopUp.Style'
import Colors from '../../../../../../theme'
import Button from '../../../../../atoms/Button'
import ContactModal from '../../../../ContactModal'

function MapPopup({ data }) {
  // aqui borré ContactPerson y contactPhone porque no hay datos iguales en el json
  // https://api-casas.kevinmamaqi.com/api-casas
  const { price, image, name, habitaciones, m2, gastosIncluidos } = data
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
              color: Colors.strongBlue,
              background: 'transparent',
              boxShadow: 'none',
              paddingLeft: '0',
            }}
            text="Contactar"
            type="button"
            name="forum"
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
  data: PropTypes.object.isRequired,
}

export default MapPopup

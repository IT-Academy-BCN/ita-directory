import React, { useState } from 'react'
import PropTypes from 'prop-types'
import { Popup } from 'react-leaflet'
import { ContactModal } from '../../../..'
import imgHouse from '../../../../../../assets/images/casaPiscinaAd2.jpg'
// Styles
import { PopupStyled, Content, Address, Span, PropertyData, Price } from './MapPopUp.Style'
import { colors } from '../../../../../../theme'
import { Button } from '../../../../../atoms'

function MapPopup({ data }) {
  const newData = data
  // aqui borré ContactPerson y contactPhone porque no hay datos iguales en el json
  // https://api-casas.kevinmamaqi.com/api-casas
  const { price, city, description, nRooms, squareMeters, includedExpenses } = newData

  const [active, setActive] = useState(false)
  return (
    <>
      <Popup>
        <PopupStyled>
          <img src={imgHouse} alt={description} />
        </PopupStyled>
        <Content>
          <PropertyData>
            <Address text={`Piso en ${city}`} />
            <Price text={`${Number(price.toFixed(2)).toLocaleString()} €/mes`} />
            <div className="property-data-extra">
              <Span text={`Gastos ${includedExpenses ? 'incuidos' : ' no incluidos'}`} />
              <Span text={`${nRooms} habitaciones`} />
              <Span text={`${squareMeters} m2`} />
            </div>
          </PropertyData>
          <Button
            buttonStyles={{
              display: 'flex',
              width: '7.5rem',
              height: '2.2rem',
              marginTop: 'auto',
              fontSize: '1rem',
              fontFamily: 'Arial',
              background: colors.strongBlue,
              boxShadow: 'none',
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
  data: PropTypes.object,
}

export default MapPopup

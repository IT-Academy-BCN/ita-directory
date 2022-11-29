import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import { useHistory } from 'react-router-dom'
import { colors, device } from '../../../theme'
import { Button, ImageButton, Text } from '../../../components/atoms'
import adImage from '../../../assets/images/casaPiscinaAd2.jpg'

const AdCardStyled = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  border-bottom: 1px solid ${colors.grey};
  margin-bottom: 1.5rem;
  overflow: hidden;
  padding: 0 10px;

  &:last-child {
    border: none;
  }

  .ad-card__content {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: flex-start;
    width: 100%;
    padding: 1rem;
    gap: 0.7rem;

    .ad-card__address {
      font-size: 14px;
      color: ${colors.grey};
    }
    .ad-card__property-data {
      display: flex;
      align-items: flex-start;
      flex-wrap: wrap;
      flex-direction: column;
      justify-content: space-between;
      font-size: 14px;
      font-weight: bold;
      color: ${colors.grey};
      overflow: hidden;
      text-overflow: ellipsis;
    }
    .ad-card__property-data span {
      margin-right: 4px;
    }
    .ad-card__price {
      color: ${colors.darkOrange};
      font-size: 18px;
    }
    .ad-card__description {
      font-size: 14px;
      color: ${colors.grey};
    }
  }

  @media ${device.Laptop} {
    .ad-card__content {
      .ad-card__property-data {
        flex-direction: row;
        flex-wrap: nowrap;
        align-items: center;
      }
    }
  }
`

function UserAdsCard({ title, city, price, squareMeters, description, nRooms, id, onClick }) {
  const gastosIncluidos = true
  const history = useHistory()

  const handleClick = () => {
    history.push(`ad/${id}`)
  }
  const handleKeyPress = (event) => {
    if (event.keyCode === '13') {
      handleClick()
    }
  }
  return (
    <AdCardStyled>
      <ImageButton
        handleClick={handleClick}
        handleKeyPress={handleKeyPress}
        tabIndex={id}
        adImage={adImage}
      />
      <div className="ad-card__content">
        <Text as="span" text={`${title} en ${city}`} className="ad-card__address" />
        <div className="ad-card__property-data">
          <Text as="span" text={`${price}€/mes`} className="ad-card__price" />
          <Text as="span" text={`${nRooms} habitaciones`} />
          <Text as="span" text={`${squareMeters}m2`} />
          <Text as="span" text={`Gastos ${gastosIncluidos ? ' incluidos' : ' no incluidos'}`} />
        </div>
        <div className="ad-card__description">&quot;{description}&quot;</div>
        <div style={{ display: 'flex', gap: '5px' }}>
          <Button
            text="Ver Anuncio"
            onClick={handleClick}
            tabIndex={id + 10}
            className="blue-gradient w-36"
          />
          <Button
            text="Editar"
            onClick={onClick}
            tabIndex={id + 10}
            className="orange-gradient w-36"
          />
        </div>
      </div>
    </AdCardStyled>
  )
}

UserAdsCard.propTypes = {
  title: PropTypes.string.isRequired,
  city: PropTypes.string,
  price: PropTypes.number.isRequired,
  squareMeters: PropTypes.number.isRequired,
  description: PropTypes.string.isRequired,
  nRooms: PropTypes.number.isRequired,
  id: PropTypes.number.isRequired,
  onClick: PropTypes.func,
}

export default UserAdsCard

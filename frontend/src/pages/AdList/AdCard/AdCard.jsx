import React, { useState } from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import { useHistory } from 'react-router-dom'
// import { faComments } from '@fortawesome/free-solid-svg-icons'
import { colors, device } from '../../../theme'
import { Button, ImageButton } from '../../../components/atoms'
import ContactModal from '../../../components/organisms/ContactModal/ContactModal'
import adImage from '../../../assets/images/casaPiscinaAd2.jpg'

const AdCardStyled = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  border-radius: 6px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.25);
  margin-bottom: 1.5rem;
  height: 175px;
  overflow: hidden;

  ${
    '' /* img {
    height: 170px;
    width: 200px;
    object-fit: contain;
    border-radius: 6px;
    cursor: pointer;
  } */
  }

  .content {
    display: flex;
    flex-direction: column;
    padding: 1rem 1.5rem;

    .content-text {
      .wrapper-buttons {
        display: flex;
        flex-direction: row;
        gap: 1rem;
      }
      p.address {
        font-size: 14px;
        color: #666;
      }

      .property-data {
        display: flex;
        align-items: center;
        justify-content: space-between;
        flex-wrap: wrap;

        span {
          font-size: 14px;
        }

        span.price {
          color: ${colors.darkOrange};
          font-weight: bold;
          font-size: 18px;
        }
      }

      .description {
        font-size: 14px;
      }

      button {
        ${
          '' /* display: 'flex',
        alignItems: 'center',
        width: '7.5rem',
        height: '2.2rem',
        marginTop: 'auto',
        fontSize: '1.125rem',
        fontFamily: 'Arial', */
        }
        font-weight: bold;
        color: ${colors.strongBlue}
        background: 'transparent',
        ${
          '' /* boxShadow: 'none',
        paddingLeft: '0', */
        }
      }
    }
  }
  @media ${device.Tablet} {
    display: grid;
    grid-template-columns: 30% 70%;

    img {
      width: 100%;
      height: 240px;
      object-fit: cover;
      border-radius: 6px;
    }

    .content {
      display: flex;
      flex-direction: column;
      padding: 1.5rem;
      height: 100%;
    }

    .address,
    .property-data {
      padding-bottom: 1rem;
    }
  }
`

function AdCard({
  e,
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
      <div className="content">
        <div className="content-text">
          <p className="address">{`${title} en ${city}`}</p>
          <div className="property-data">
            <span className="price">{price}€/mes</span>
            <span>{nRooms} habitaciones</span>
            <span>{squareMeters}m2</span>
            <span>Gastos {gastosIncluidos ? ' incluidos' : ' no incluidos'}</span>
          </div>
          <div className="description">&quot;{description}&quot;</div>
          <div className="wrapper-buttons">
            <Button
              className="transparent"
              text="Contactar"
              // icon={faComments}
              iconPosition="left"
              iconStyles={{
                marginRight: 5,
                paddingLeft: 0,
              }}
              onClick={() => setActive(true)}
              tabIndex={id + 10}
            />
          </div>
        </div>
      </div>
      <ContactModal active={active} hideModal={() => setActive(false)} />
    </AdCardStyled>
  )
}

AdCard.propTypes = {
  e: PropTypes.object.isRequired,
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

// @ts-nocheck
import React, { useState } from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import { Link, useHistory } from 'react-router-dom'
import { colors, device } from '../../../theme'
import { Button, ImageButton, Text } from '../../../components/atoms'
import adImage from '../../../assets/images/casaPiscinaAd2.jpg'
import { ContactModal } from '../../../components/organisms'
import useUser from '../../../hooks/useUserHook'

const ContactButton = ({ setActive }) => (
  <Button
    text="Contactar"
    icon="chat"
    textColor={colors.strongBlue}
    iconPosition="left"
    onClick={() => setActive(true)}
    tabIndex={0}
    buttonStyles={{ padding: 1 }}
    textStyles={{ marginLeft: 7 }}
    className="transparent"
    type="button"
    data-testid="contactButtonAdCard"
  />
)

const EditButton = () => (
  <Link to="/edit-ad" style={{ textDecoration: 'none' }}>
    <Button
      text="Editar"
      icon="edit_square"
      textColor={colors.strongBlue}
      iconPosition="left"
      tabIndex={0}
      buttonStyles={{ padding: 0 }}
      textStyles={{ marginLeft: 7, marginTop: 5 }}
      className="transparent"
      type="button"
      data-testid="editButtonAdCard"
    />
  </Link>
)

const AdCardStyled = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  border-radius: 6px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.25);
  margin-bottom: 1.5rem;
  overflow: hidden;

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
      margin-right: 2rem;
    }
    .ad-card__price {
      color: ${colors.darkOrange};
      font-size: 18px;
    }
    .ad-card__description {
      font-size: 14px;
      color: ${colors.grey};
      overflow: hidden;
      text-overflow: ellipsis;
      display: -webkit-box;
      -webkit-line-clamp: 2; /* number of lines to show */
      line-clamp: 2;
      -webkit-box-orient: vertical;
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
  const currentUser = useUser()

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
        <Button
          text="Contactar"
          icon="forum"
          textColor={colors.strongBlue}
          iconPosition="left"
          onClick={() => setActive(true)}
          tabIndex={id + 10}
          buttonStyles={{ padding: 0 }}
          className="transparent"
        />
        {currentUser && userId === currentUser.id ? (
          <EditButton />
        ) : (
          <ContactButton setActive={setActive} />
        )}
        <ContactModal active={active} hideModal={() => setActive(false)} />
      </div>
    </AdCardStyled>
  )
}

AdCard.propTypes = {
  title: PropTypes.string.isRequired,
  city: PropTypes.string,
  mapLon: PropTypes.string.isRequired,
  mapLat: PropTypes.string.isRequired,
  userId: PropTypes.number.isRequired,
  price: PropTypes.number.isRequired,
  squareMeters: PropTypes.number.isRequired,
  description: PropTypes.string.isRequired,
  nRooms: PropTypes.number.isRequired,
  nBathrooms: PropTypes.number.isRequired,
  id: PropTypes.number.isRequired,
}

export default AdCard
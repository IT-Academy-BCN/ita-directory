import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import PropTypes from 'prop-types'
import { StyledCity, StyledP } from './AdCard.style'
import Button from '../../../components/atoms/Button'
import CardOrganism from '../../../components/organisms/Card/CardOrganism'
import EditAdModal from '../EditAdModal/EditAdModal'

function AdCard({ ad, containerClassName }) {
  const { name, m2, desc, habitaciones, image, id } = ad
  const [active, setActive] = useState(false)
  return (
    <CardOrganism
      titleClassName="titleClassName"
      containerClassName={containerClassName}
      descriptionClassName="descriptionContainer"
      image={image}
      title={name}
      description={
        <>
          <StyledCity>Barcelona</StyledCity>
          <StyledP>{`${m2} m\u00B2`}</StyledP>
          <StyledP>{`${habitaciones} habitaciones`}</StyledP>
        </>
      }
      text={desc}
      footer={
        <>
          <Link style={{ textDecoration: 'none' }} to={{ pathname: `ad/${id}`, state: { ad } }}>
            <Button
              className="blue-gradient"
              text="Ver Anuncio"
              type="button"
              buttonStyles={{
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                textAlign: 'center',
                marginRight: '1.5rem',
                width: '116px',
                height: '34px',
                letterSpacing: '0px',
                fontSize: '0.95rem',
                fontFamily: 'Arial',
              }}
            />
          </Link>

          <Button
            buttonStyles={{
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center',
              textAlign: 'center',
              width: '116px',
              height: '34px',
              letterSpacing: '0px',
              fontSize: '0.95rem',
              fontFamily: 'Arial',
            }}
            text="Editar"
            className="orange-gradient"
            type="button"
            onClick={() => setActive(true)}
          />

          <EditAdModal ad={ad} active={active} hideModal={() => setActive(false)} />
        </>
      }
    />
  )
}

AdCard.propTypes = {
  ad: PropTypes.object,
  containerClassName: PropTypes.oneOfType([PropTypes.string, PropTypes.object]),
}

export default AdCard

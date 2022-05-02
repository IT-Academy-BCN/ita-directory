import React from 'react'
import PropTypes from 'prop-types'
import CardStyled from './Card.style'

function Card({ image, title, description, text, footer, name }) {
  return (
    <CardStyled>
      <img src={`${import.meta.env.REACT_APP_STATIC_FILES_URL}/${image}`} alt={name} />
      <div className="info">
        <h3>{title}</h3>
        <div className="description">{description}</div>
        <p>{text}</p>
        <div className="footer">{footer}</div>
      </div>
    </CardStyled>
  )
}
Card.propTypes = {
  image: PropTypes.object,
  title: PropTypes.string,
  description: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node,
    PropTypes.string,
  ]).isRequired,
  text: PropTypes.string,
  footer: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node,
    PropTypes.string,
  ]),
  name: PropTypes.string,
}

export default Card

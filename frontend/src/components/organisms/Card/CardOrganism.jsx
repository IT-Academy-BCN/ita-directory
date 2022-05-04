import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import Card from '../../atoms/Card'
import { device, colors } from '../../../theme'

const Img = styled.img`
  width: 100%;
  max-width: 300px;
  height: auto;
  object-fit: cover;
  border-radius: 6px;
  margin-left: 0rem;
  margin-top: 0.5rem;

  @media only ${device.Tablet} {
    margin-left: 0.5;
    margin-top: 0;
    width: auto;
    height: 100%;
  }
`
const ContainerInfo = styled.div`
  margin-left: 0.5rem;
  padding: 1rem;

  @media only ${device.Tablet} {
    margin-left: 3rem;
  }
}
  h3 {
    color: ${colors.grey};
    font-size: 16px;
    text-align: left;
    padding-bottom: 1rem;
    letter-spacing: 0px;
    opacity: 1;
  }

  .description {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: flex-start;
    margin-right: 0.2rem;
    max-width: 60%;

    @media only ${device.Tablet} {
      flex-direction: row;
      align-items: center;
    }
  }

  p {
    margin-top: 1rem;
    text-align: left;
    display: flex;
    letter-spacing: 0px;
    line-height: normal;
    opacity: 1;
    padding-bottom: 0;
  }

  .footer {
    display: flex;
  }
`

function CardOrganism({ image, title, description, text, footer, name }) {
  return (
    <Card>
      <Img src={`${import.meta.env.REACT_APP_STATIC_FILES_URL}/${image}`} alt={name} />
      <ContainerInfo>
        <h3>{title}</h3>
        <div className="description">{description}</div>
        <p>{text}</p>
        <div className="footer">{footer}</div>
      </ContainerInfo>
    </Card>
  )
}
CardOrganism.propTypes = {
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

export default styled(CardOrganism)``

import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import Card from '../../atoms/Card'
import { device, colors, font } from '../../../theme'
import { Text, Title } from '../../atoms'

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
const ContainerInfo = styled.div.attrs({})`
  margin-left: 0.5rem;
  padding: 1rem;

  @media only ${device.Tablet} {
    margin-left: 3rem;
  }
}
  ${Title} {
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

  ${Text} {
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

function AdCard({
  image,
  description,
  text,
  footer,
  name,
  fontSize,
  color,
  ad,
  containerClassName,
  titleClassName,
}) {
  return (
    <Card ad={ad} containerClassName={containerClassName} titleClassName={titleClassName}>
      <Img src={`${import.meta.env.VITE_REACT_APP_STATIC_FILES_URL}/${image}`} alt={name} />
      <ContainerInfo>
        <Title as="h3" fontSize={`${font.base}`} color={`${colors.grey}`} text={text}>
          {text}
        </Title>
        <div className="description">{description}</div>
        <Text fontSize={fontSize} color={color} text={text}>
          {text}
        </Text>
        <div className="footer">{footer}</div>
      </ContainerInfo>
    </Card>
  )
}
AdCard.propTypes = {
  containerClassName: PropTypes.string,
  titleClassName: PropTypes.string,
  ad: PropTypes.object,
  image: PropTypes.object,
  description: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node,
    PropTypes.string,
  ]).isRequired,
  fontSize: PropTypes.string,
  color: PropTypes.string,
  text: PropTypes.string.isRequired,
  footer: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node,
    PropTypes.string,
  ]),
  name: PropTypes.string,
}

export default styled(AdCard)``

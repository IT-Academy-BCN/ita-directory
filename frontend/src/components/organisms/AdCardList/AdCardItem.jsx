import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import { colors } from '../../../theme'
import { Button, Text, Card } from '../../atoms'

const ImgStyle = styled.img`
  width: 100%;
  height: 175px;
  object-fit: cover;
  border-radius: inherit;
  :hover {
    cursor: pointer;
  }
`
const ContainerInLine = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1rem 1.5rem;
  .price {
    font-weight: bold;
    font-size: 18px;
  }
`

function AdCardItem({ ad, openSelectedAdPopup, image }) {
  return (
    <Card>
      <ImgStyle src={image} alt="" />
      <Text>{ad.description}</Text>
      <ContainerInLine>
        <Text as="span" className="price">{`${ad.price}€`}</Text>{' '}
        <Button
          buttonStyles={{ backgroundColor: colors.violet }}
          type="button"
          text="Localizar"
          onClick={openSelectedAdPopup}
        />
      </ContainerInLine>
    </Card>
  )
}

AdCardItem.propTypes = {
  ad: PropTypes.object,
  openSelectedAdPopup: PropTypes.string,
  image: PropTypes.string,
}

export default styled(AdCardItem)``

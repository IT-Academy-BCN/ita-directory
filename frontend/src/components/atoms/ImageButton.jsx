// @ts-nocheck
import PropTypes from 'prop-types'
import React from 'react'
import Styled from 'styled-components'
import { dimensions, imageSize } from '../../theme'

function ImageButton({ adImage, title, handleClick, handleKeyPress }) {
  const ImageButtonStyled = Styled.button`
  background: none;
  outline: none;
  cursor: pointer;
  border: none;
  padding: 0;
  
  & img {
    width: ${imageSize.thumbnail.width};
    height: ${imageSize.thumbnail.height};
    object-fit: cover;
    border-radius: ${dimensions.borderRadius}px;
    
  }
  &:focus img { 
    border: 2px solid #000;
  }
  `

  return (
    <ImageButtonStyled
      type="button"
      onClick={() => handleClick()}
      onKeyDown={() => handleKeyPress()}
    >
      <img src={adImage} alt={title} />
    </ImageButtonStyled>
  )
}

ImageButton.propTypes = {
  adImage: PropTypes.string.isRequired,
  title: PropTypes.string,
  handleClick: PropTypes.func.isRequired,
  handleKeyPress: PropTypes.func.isRequired,
}
export default ImageButton

import PropTypes from 'prop-types'
import Styled from 'styled-components'

function ImageButton({ adImage, title, handleClick, handleKeyPress }) {
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

const ImageButtonStyled = Styled.button`
  background: none;
  outline: none;
  cursor: pointer;
  border: none;
  padding: 0;

  & img {
    width: 170px;      
    height: 170px;
    object-fit: cover;
    object-position: center;
    border-radius: 6px;
    border: 2px solid #fff;
  }
  &:focus img { 
    border: 2px solid #000;
  }
`

ImageButton.propTypes = {
  adImage: PropTypes.string.isRequired,
  title: PropTypes.string,
  handleClick: PropTypes.func.isRequired,
  handleKeyPress: PropTypes.func.isRequired,
}

export default ImageButton

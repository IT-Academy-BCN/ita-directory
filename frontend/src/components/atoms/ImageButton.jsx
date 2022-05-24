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
  overflow: hidden;

  & img {
    width: 100%;
    height: 100%;
    background-size: cover;
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

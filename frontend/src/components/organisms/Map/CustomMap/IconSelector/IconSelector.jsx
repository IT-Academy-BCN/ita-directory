import PropTypes from 'prop-types'
import CustomIcon from './CustomIcon/CustomIcon'
import { IconContainer } from './IconsSelector.styles'

function IconSelector({ customIcons, handelOnClickIcon }) {
  return (
    <IconContainer>
      {customIcons.map((icono) => (
        <CustomIcon key={icono.key} icono={icono} handelOnClickIcon={handelOnClickIcon} />
      ))}
    </IconContainer>
  )
}

IconSelector.propTypes = {
  customIcons: PropTypes.array.isRequired,
  handelOnClickIcon: PropTypes.func.isRequired,
}

export default IconSelector

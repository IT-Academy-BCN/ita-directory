import React from 'react'
import PropTypes from 'prop-types'
import { ModalGraphicStyled } from './ModalGraphic.styles'

function ModalGraphic({ children, active, hideModal }) {
  return active ? (
    <ModalGraphicStyled>
      {/* eslint-disable-next-line jsx-a11y/click-events-have-key-events, jsx-a11y/no-static-element-interactions */}
      <div className="modalOverlay" onClick={hideModal} />
      <div className="modalBody">{children}</div>
    </ModalGraphicStyled>
  ) : null
}

ModalGraphic.propTypes = {
  children: PropTypes.node.isRequired,
  active: PropTypes.bool.isRequired,
  hideModal: PropTypes.func.isRequired,
}

export default ModalGraphic

import React from 'react'
import PropTypes from 'prop-types'
import { ModalGraphicStyled } from './ModalGraphic.styles'

function ModalGraphic({ children, active, hideModal }) {
  return active ? (
    <ModalGraphicStyled>
      <div className="modalOverlay" onClick={() => hideModal()} />
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

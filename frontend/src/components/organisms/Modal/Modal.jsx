// @ts-nocheck
import React from 'react'
import PropTypes from 'prop-types'
import { ModalBlock } from './Modal.styles'
import { Icon, Title } from '../../atoms'
import { FlexBox } from '../../../theme/wrappers'

function Modal({ title, footer, children, active, hideModal, color, fontSize, iconClose }) {
  return (
    active && (
      <ModalBlock>
        {/* eslint-disable-next-line jsx-a11y/click-events-have-key-events, jsx-a11y/no-static-element-interactions */}
        <div className="modalOverlay" onClick={() => hideModal((prev) => !prev)} />
        <div className="modalContainer">
          <FlexBox alignItems="center" justifyContent="space-between">
            <Title order={3} text={title} color={color} fontSize={fontSize} />
            {!iconClose && <Icon name="close" onClick={hideModal} />}
          </FlexBox>
          <div className="modalBody">{children}</div>
          <div className="modalFooter">{footer}</div>
        </div>
      </ModalBlock>
    )
  )
}

Modal.propTypes = {
  title: PropTypes.string,
  color: PropTypes.string,
  fontSize: PropTypes.string,
  iconClose: PropTypes.bool,
  footer: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node,
    PropTypes.string,
  ]),
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node,
    PropTypes.string,
  ]).isRequired,
  active: PropTypes.bool.isRequired,
  hideModal: PropTypes.func.isRequired,
}

export default Modal

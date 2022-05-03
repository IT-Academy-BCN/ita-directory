import React from 'react'
import PropTypes from 'prop-types'
import { faTimes } from '@fortawesome/free-solid-svg-icons'
import { ModalBlock } from './Modal.styles'
import { colors } from '../../../theme'
import Button from '../../atoms/Button'

function Modal({ title, footer, children, active, hideModal }) {
  return (
    active && (
      <ModalBlock>
        {/* eslint-disable-next-line jsx-a11y/click-events-have-key-events, jsx-a11y/no-static-element-interactions */}
        <div className="modalOverlay" onClick={() => hideModal((prev) => !prev)} />
        <div className="modalContainer">
          <div className="modalHeader">
            <span>{title}</span>
            <Button
              iconPosition="left"
              type="submit"
              onClick={() => hideModal()}
              icon={faTimes}
              buttonStyles={{
                color: colors.lightGrey,
                background: 'transparent',
                boxShadow: 'none',
                fontSize: '0.95rem',
                fontFamily: 'Arial',
                width: 'auto',
                paddingLeft: 0,
                paddingRight: 0,
              }}
              iconStyles={{
                paddingRight: '5px',
                paddingLeft: '0px',
                width: '1rem',
                height: '1rem',
              }}
            />
          </div>
          <div className="modalBody">{children}</div>
          <div className="modalFooter">{footer}</div>
        </div>
      </ModalBlock>
    )
  )
}

Modal.propTypes = {
  title: PropTypes.string,
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

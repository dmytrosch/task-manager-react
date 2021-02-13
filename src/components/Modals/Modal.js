import React, { useEffect } from 'react'
import style from './Modal.module.css'
import PropTypes from 'prop-types'
import classNames from 'classnames'
import iconClose from '../../assest/icons/Close.icon.svg'

export default function Modal({ children, onClose, position, ...props }) {
  const handleKeyboardCloseWindow = (e) => {
    if (e.code === 'Escape') {
      onClose()
    }
  }

  useEffect(() => {
    document.addEventListener('keydown', handleKeyboardCloseWindow)

    return () =>
      document.removeEventListener('keydown', handleKeyboardCloseWindow)
  })

  return (
    <div className={style.modalBackdrop}>
      <div className={classNames(style.modalWindowRight, style[position])}>
        <div className={style.iconContainer}>
          <button type="button" onClick={onClose} className={style.iconButton}>
            <img src={iconClose} alt="" className={style.icon} />
          </button>
        </div>
        {children}
      </div>
    </div>
  )
}
Modal.proprTypes = {
  position: PropTypes.string,
}
/* modalWindowRight, modalWindowCenter, modalWindowRemoval  */
Modal.defaultProps = {
  position: 'modalWindowRight',
}

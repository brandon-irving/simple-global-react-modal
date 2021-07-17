import React from 'react'
import { useGlobalModal } from '../globalModalContext'
import {
  modalDialogCss,
  modalContentCss,
  bgCss,
  headerCss,
  modalBodyCss,
  modalFooterCss,
  modalTitle
} from './styles'

const InternalModal = (props) => {
  const {
    modal: {
      size = 'md',
      customSize = {},
      header,
      body,
      title,
      footer,
      closeOnBackgroundClick = true
    },
    isModalInFront
  } = props

  const { closeModal } = useGlobalModal()

  const desired = (title && <div style={modalTitle}>{title}</div>) || header

  function handleClose() {
    closeOnBackgroundClick && closeModal()
  }
  return (
    <React.Fragment>
      <div
        id='lw-modal'
        style={modalDialogCss(size, isModalInFront, customSize)}
      >
        <div id='lw-modal-content' style={modalContentCss()}>
          {!!desired && (
            <div id='lw-modal-header' style={headerCss}>
              {desired}
            </div>
          )}
          <div id='lw-modal-body' style={modalBodyCss}>
            {body}
          </div>
          {!!footer && (
            <div id='lw-modal-footer' style={modalFooterCss}>
              {footer}
            </div>
          )}
        </div>
      </div>
      <div style={bgCss} onClick={handleClose} />
    </React.Fragment>
  )
}

const Modal = () => {
  const { modalConfigs } = useGlobalModal()
  const [modalStates, setmodalStates] = React.useState(modalConfigs)

  function updateGlobalModals() {
    const lastModal = modalStates[modalStates.length - 1]
    if (!modalConfigs[0]) {
      const newModals = [...modalStates]
      newModals.splice(-1, 1)
      setmodalStates(newModals)
    } else if (modalConfigs[0] !== lastModal) {
      setmodalStates([...modalStates, modalConfigs[0]])
    }
  }

  React.useEffect(() => {
    updateGlobalModals()
  }, [modalConfigs])

  if (!modalStates.length) return null
  return modalStates.map((modal = {}, index) => {
    const isModalInFront = modalStates.length === index + 1
    return (
      <InternalModal
        modal={modal}
        isModalInFront={isModalInFront}
        index={index}
        key={index}
      />
    )
  })
}

export default Modal

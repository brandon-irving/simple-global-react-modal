import React from 'react'
import { useGlobalModal } from '../globalModalContext'
import {
  modalDialogCss,
  modalContentCss,
  bgCss,
  headerCss,
  modalBodyCss,
  modalFooterCss,
  modalTitle,
  closeButtonCss
} from './styles'

const defaultClassNames = {
  modal: [],
  header: [],
  content: [],
  body: [],
  footer: [],
  background: []
}

const InternalModal = (props) => {
  const {
    modal: {
      size = 'md',
      customSize = {},
      customClassNames = {},
      position = 'center',
      header,
      body,
      title,
      footer,
      closeOnBackgroundClick = true,
      closeButton = true
    },
    isModalInFront
  } = props

  const { closeModal } = useGlobalModal()

  const desired = (title && <div style={modalTitle}>{title}</div>) || header

  const {
    modal: modalClassNames,
    header: headerClassNames,
    content: contentClassNames,
    body: bodyClassNames,
    footer: footerClassNames,
    background: backgroundClassNames
  } = { ...defaultClassNames, ...customClassNames }

  const classNameGenerator = (classNameArray) =>
    classNameArray.join().replace(',', ' ')

  const styleProps = (classNameArray, defaultStyle) => {
    return classNameArray.length
      ? { className: classNameGenerator(classNameArray) }
      : { style: defaultStyle }
  }

  function handleClose() {
    closeOnBackgroundClick && closeModal()
  }

  return (
    <React.Fragment>
      <div
        id='lw-modal'
        {...styleProps(
          modalClassNames,
          modalDialogCss({ size, isModalInFront, customSize, position })
        )}
      >
        <div
          id='lw-modal-content'
          {...styleProps(contentClassNames, modalContentCss)}
        >
          <div
            id='lw-modal-header'
            {...styleProps(headerClassNames, headerCss)}
          >
            {!!desired && desired}
            <div onClick={handleClose} style={closeButtonCss(closeButton)}>
              ╳
            </div>
          </div>
          <div id='lw-modal-body' {...styleProps(bodyClassNames, modalBodyCss)}>
            {body}
          </div>
          {!!footer && (
            <div
              id='lw-modal-footer'
              {...styleProps(footerClassNames, modalFooterCss)}
            >
              {footer}
            </div>
          )}
        </div>
      </div>
      <div
        ref={(el) => {
          if (el) {
            el.style.setProperty('z-index', '9998', 'important')
            el.style.setProperty('position', 'absolute', 'important')
            el.style.setProperty('width', '100%', 'important')
            el.style.setProperty('height', '100%', 'important')
            el.style.setProperty('top', 0, 'important')
            el.style.setProperty('left', 0, 'important')
          }
        }}
        {...styleProps(backgroundClassNames, bgCss)}
        onClick={handleClose}
      />
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

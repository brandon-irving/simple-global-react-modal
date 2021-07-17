import React from 'react'
import {
  GlobalModalProvider as Provider,
  useGlobalModal as useModal
} from './globalModalContext'
import Modal from './modal'

export const GlobalModalProvider = (props) => {
  return (
    <Provider {...props}>
      {props.children}
      <Modal />
    </Provider>
  )
}

export const useGlobalModal = (props) => useModal(props)

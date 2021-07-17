import * as React from 'react'

const GlobalModalContext = React.createContext()

export function GlobalModalProvider(props) {
  const [modalConfigs, setmodalConfigs] = React.useState([])

  function openModal(modalConfig) {
    setmodalConfigs([modalConfig])
  }

  function closeModal() {
    const newModalConfigs = [...modalConfigs]
    newModalConfigs.splice(-1, 1)
    setmodalConfigs(newModalConfigs)
  }

  React.useEffect(() => {}, [])
  return (
    <GlobalModalContext.Provider
      value={{ modalConfigs, openModal, closeModal }}
    >
      {props.children}
    </GlobalModalContext.Provider>
  )
}

export const useGlobalModal = () => React.useContext(GlobalModalContext)

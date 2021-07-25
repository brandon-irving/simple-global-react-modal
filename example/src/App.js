import React from 'react'
import { GlobalModalProvider, useGlobalModal } from 'react-global-modal'
import './index.css'

const App = () => {
  return (
    <GlobalModalProvider>
      <Home />
    </GlobalModalProvider>
  )
}

const Button = (props) => {
  const buttonStyle = {
    lineHeight: '2rem',
    minWidth: '5rem',
    fontWeight: 500,
    borderRadius: '5px',
    borderColor: 'blue',
    textAlign: 'center',
    color: 'white',
    backgroundColor: 'blue',
    fontSize: '1rem'
  }
  return (
    <button style={buttonStyle} {...props}>
      {props.children}
    </button>
  )
}

const ModalContent3 = () => {
  return 'Fin..'
}

const ModalContent2 = () => {
  const { openModal, closeModal } = useGlobalModal()
  function handleClick() {
    openModal({
      size: 'xl',
      body: <ModalContent3 />,
      title: 'X-Large Modal',
      footer: <Button onClick={closeModal}>Close</Button>
    })
  }
  return (
    <div>
      <h2>Im medium and at the bottom!</h2>
      <div>
        <button onClick={handleClick}>Open Modal</button>
      </div>
    </div>
  )
}

const ModalContent1 = () => {
  const { openModal, closeModal } = useGlobalModal()
  function handleClick() {
    openModal({
      position: 'bottom',
      size: 'md',
      body: <ModalContent2 />,
      title: 'Medium Modal',
      footer: <Button onClick={closeModal}>Close</Button>
    })
  }
  return (
    <div>
      <h2>Im small and centered!</h2>
      <div>
        <button onClick={handleClick}>Open Modal</button>
      </div>
    </div>
  )
}

const Home = () => {
  const { openModal, closeModal } = useGlobalModal()
  function handleClick() {
    openModal({
      size: 'sm',
      body: <ModalContent1 />,
      title: 'Small Modal',
      footer: <Button onClick={closeModal}>Close</Button>
    })
  }
  return (
    <React.Fragment>
      <div>Home</div>
      <div>
        <button onClick={handleClick}>Open Modal</button>
      </div>
    </React.Fragment>
  )
}

export default App

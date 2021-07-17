import React from 'react'
import { GlobalModalProvider, useGlobalModal } from 'react-global-modal'

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

const ModalContent2 = () => {
  return <div>You could add as many as you like!</div>
}

const ModalContent1 = () => {
  const { openModal, closeModal } = useGlobalModal()
  function handleClick() {
    openModal({
      body: <ModalContent2 />,
      title: 'Another one...',
      footer: <Button onClick={closeModal}>Close</Button>
    })
  }
  return (
    <div>
      <h2>No dependencies! just react and css!</h2>
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
      body: <ModalContent1 />,
      title: 'Simple Title',
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

const sizeMapper = {
  sm: '40vw',
  md: '50vw',
  lg: '60vw',
  xl: '70vw'
}
const positionMapper = {
  bottom: '60%',
  center: '45%',
  top: '20%'
}
export const modalDialogCss = ({
  size,
  isModalInFront,
  customSize,
  position,
  fullScreen
}) => ({
  visibility: isModalInFront ? 'visible' : 'hidden',
  maxWidth: fullScreen ? '100vw' : sizeMapper[size],
  minWidth: fullScreen ? '100vw' : sizeMapper[size],
  minHeight: fullScreen ? '100vh' : 'auto',
  margin: '1.75rem auto',
  zIndex: '9999',
  position: 'fixed',
  overflowX: 'hidden',
  overflowY: 'auto',
  outline: 0,
  background: '#fff',
  top: positionMapper[position] || '45%',
  left: '50%',
  padding: '15px',
  borderRadius: '10px',
  transform: 'translate(-50%, -50%)',
  ...customSize
})

export const modalContentCss = {
  display: 'flex',
  flexDirection: 'column',
  width: '100%'
}

export const bgCss = {
  background: 'rgba(0, 0, 0, 0.24)'
}

export const headerCss = (fullScreen) => ({
  display: 'flex',
  flexShrink: 0,
  alignItems: 'center',
  justifyContent: 'space-between',
  padding: fullScreen ? '1.5rem' : '.5rem',
  borderBottom: '1px solid #dee2e6',
  borderTopLeftRadius: 'calc(.3rem - 1px)',
  borderTopRightRadius: 'calc(.3rem - 1px)'
})

export const modalBodyCss = {
  position: 'relative',
  flex: '1 1 auto',
  padding: '1rem'
}

export const modalFooterCss = {
  display: 'flex',
  flexWrap: 'wrap',
  flexShrink: 0,
  alignItems: 'center',
  justifyContent: 'flex-end',
  padding: '.75rem',
  borderTop: '1px solid #dee2e6',
  borderTopLeftRadius: 'calc(.3rem - 1px)',
  borderTopRightRadius: 'calc(.3rem - 1px)'
}

export const modalTitle = {
  marginBottom: 0,
  lineHeight: 1.5,
  fontSize: 'calc(1.275rem + .3vw)',
  fontWeight: 'bold'
}
export const closeButtonCss = (show) => ({
  visibility: show ? 'visible' : 'hidden',
  fontSize: '12pt',
  fontWeight: 'bold',
  cursor: 'pointer',
  width: '25px',
  height: '25px',
  textAlign: 'center'
})

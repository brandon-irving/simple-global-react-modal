const sizeMapper = {
  sm: ['250px', '100px'],
  md: ['450px', '300px'],
  lg: ['650px', '500px'],
  xl: ['850px', '700px']
}
export const modalDialogCss = (size, isModalInFront, customSize) => ({
  visibility: isModalInFront ? 'visible' : 'hidden',
  maxWidth: sizeMapper[size][0],
  minWidth: sizeMapper[size][0],
  minHeight: 'auto',
  margin: '1.75rem auto',
  zIndex: '9999',
  position: 'fixed',
  overflowX: 'hidden',
  overflowY: 'auto',
  outline: 0,
  background: '#fff',
  top: '50%',
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

export const headerCss = {
  display: 'flex',
  flexShrink: 0,
  alignItems: 'center',
  justifyContent: 'space-between',
  padding: '.5rem',
  borderBottom: '1px solid #dee2e6',
  borderTopLeftRadius: 'calc(.3rem - 1px)',
  borderTopRightRadius: 'calc(.3rem - 1px)'
}

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

import React from 'react'
import Header from 'components/layout/Header/Header'
import Footer from 'components/layout/Footer/Footer'
import StyledBody from './styles'

const Body = ({ children, title }) => {
  return (
    <StyledBody>
      <Header title={title} />
      {children}
      {/* <div style={{padding: '2rem' }}> */}
      <Footer />
      {/* </div> */}
    </StyledBody>
  )
}

export default Body

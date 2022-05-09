import React from 'react'
import PropTypes from 'prop-types'
import Header from '../Header/Header'
import Footer from '../Footer/Footer'
import { Childrens, StyledBody } from './Body.styles'

function Body({
  children,
  title,
  logoColor,
  headerColor,
  fontColor,
  isLoggedIn,
  justifyTitle,
  hideHeader,
  hideFooter,
  dashboard,
}) {
  return (
    <StyledBody className="styledBody">
      {hideHeader && dashboard ? (
        ''
      ) : (
        <Header
          title={title}
          logoColor={logoColor}
          headerColor={headerColor}
          fontColor={fontColor}
          isLoggedIn={isLoggedIn}
          justifyTitle={justifyTitle}
          isTitleVisible={false}
        />
      )}
      <Childrens>{children}</Childrens>
      {hideFooter ? '' : <Footer />}
    </StyledBody>
  )
}

Body.propTypes = {
  children: PropTypes.node.isRequired,
  title: PropTypes.string,
  logoColor: PropTypes.string,
  headerColor: PropTypes.string,
  fontColor: PropTypes.string,
  isLoggedIn: PropTypes.bool,
  justifyTitle: PropTypes.string,
  hideHeader: PropTypes.bool,
  hideFooter: PropTypes.bool,
  dashboard: PropTypes.bool,
}

export default Body

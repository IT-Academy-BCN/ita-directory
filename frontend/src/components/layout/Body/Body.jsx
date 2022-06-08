import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import Header from '../Header/Header'
import Footer from '../Footer/Footer'
import { device } from '../../../theme'
import { Notifications } from '../../atoms'

const StyledBody = styled.div`
  min-height: 100vh;
  width: 100vw;
`

const Childrens = styled.div`
  display: flex;
  justify-content: center;
  min-height: calc(100vh - 360px);

  @media ${device.Tablet} {
    min-height: calc(100vh - 300px);
  }

  &.accessRegister {
    padding-top: 3.5rem;
  }

  &.profile {
    padding-top: 1rem;
  }
`

function Body({
  children,
  title,
  logoColor,
  isLoggedIn,
  justifyTitle,
  hideHeader,
  hideFooter,
  dashboard,
  menu,
}) {
  return (
    <StyledBody className="styledBody">
      {hideHeader && dashboard ? (
        ''
      ) : (
        <Header
          title={title}
          menu={menu}
          logoColor={logoColor}
          isLoggedIn={isLoggedIn}
          justifyTitle={justifyTitle}
          isTitleVisible={false}
        />
      )}
      <Childrens>{children}</Childrens>
      {hideFooter ? '' : <Footer />}
      <Notifications />
    </StyledBody>
  )
}

Body.propTypes = {
  children: PropTypes.node.isRequired,
  title: PropTypes.string,
  menu: PropTypes.object,
  logoColor: PropTypes.string,
  isLoggedIn: PropTypes.bool,
  justifyTitle: PropTypes.string,
  hideHeader: PropTypes.bool,
  hideFooter: PropTypes.bool,
  dashboard: PropTypes.bool,
}

export default styled(Body)``

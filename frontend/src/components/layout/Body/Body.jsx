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
  /* display: flex;
	flex-direction: column; */
`

const Childrens = styled.div`
  display: flex;
  justify-content: center;
  /* padding-top: 3.5rem; */
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
      <Notifications />
    </StyledBody>
  )
}

Body.propTypes = {
  children: PropTypes.node.isRequired,
  title: PropTypes.oneOfType([PropTypes.string, PropTypes.object]),
  logoColor: PropTypes.string,
  headerColor: PropTypes.string,
  fontColor: PropTypes.string,
  isLoggedIn: PropTypes.bool,
  justifyTitle: PropTypes.string,
  hideHeader: PropTypes.bool,
  hideFooter: PropTypes.bool,
  dashboard: PropTypes.bool,
}

export default styled(Body)``

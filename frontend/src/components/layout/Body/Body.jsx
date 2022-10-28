import React, { useMemo } from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import Header from '../Header/Header'
import Footer from '../Footer/Footer'
import { device } from '../../../theme'
import { Notifications, Text } from '../../atoms'
import useUser from '../../../hooks/useUser'
import checkRole from '../../../utils/checkRole'

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
  userRole,
}) {
  const user = useUser()
  const isValidRole = useMemo(() => checkRole(user, userRole), [user, userRole])

  return isValidRole ? (
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
  ) : (
    <Text text="You don't have persmissions to see this content." />
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
  userRole: PropTypes.string,
}

export default styled(Body)``

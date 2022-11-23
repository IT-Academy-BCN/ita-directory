/* eslint-disable react/prop-types */
// @ts-nocheck
import styled from 'styled-components'
import PropTypes from 'prop-types'

const Link = styled.a`
  transition: transform 0.2s ease-in-out, filter 0.1s ease;
  &:hover {
    transform: scale(1.1);
    filter: saturate(1.3) brightness(1.2);
  }
  &:active {
    transform: scale(0.95);
  }
`

function Profile({ children, url, title }) {
  return (
    <Link href={url} target="_blank" rel="noreferrer" title={title}>
      {children}
    </Link>
  )
}

Profile.prototype = {
  children: PropTypes.node.isRequired,
  url: PropTypes.string.isRequired,
  title: PropTypes.string,
}

export default Profile

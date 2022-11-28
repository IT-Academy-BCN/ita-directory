/* eslint-disable react/prop-types */
// @ts-nocheck
import { useState } from 'react'
import styled from 'styled-components'
import PropTypes from 'prop-types'
import { colors } from '../../../theme'
import { useGetUserQuery } from '../../../store/services/githubApi'

const Link = styled.a`
  position: relative;
  display: inline-block;

  > span {
    position: absolute;
    bottom: 100%;
    margin-left: calc(-100% / 2);
    padding: 0.2rem;
    left: 50%;
    visibility: hidden;
    width: 100%;
    background-color: ${colors.redPink};
    color: ${colors.white};
    text-align: center;
    border-radius: 6px;
    padding: 5px 0;
    z-index: 1;
    opacity: 0;
    transition: opacity 0.3s;
    font-size: 0.6rem;

    &::after {
      content: '';
      position: absolute;
      top: 97%;
      left: 50%;
      margin-left: -5px;
      border-width: 5px;
      border-style: solid;
      border-color: ${colors.redPink} transparent transparent transparent;
    }
  }

  &:hover > span {
    visibility: visible;
    opacity: 1;
    transition: opacity 0.5s 0.5s;
  }

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
  const [skip, setSkip] = useState(true)
  const { data, isSuccess } = useGetUserQuery(title, { skip })
  const handleOver = () => {
    setSkip(false)
  }
  return (
    <Link href={url} target="_blank" rel="noreferrer" onMouseOver={handleOver}>
      {children}
      <span>{isSuccess ? data.name || title : '...'}</span>
    </Link>
  )
}

Profile.prototype = {
  children: PropTypes.node.isRequired,
  url: PropTypes.string.isRequired,
  title: PropTypes.string,
}

export default Profile

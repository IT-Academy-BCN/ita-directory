import React, { ReactNode, useCallback, useState } from 'react'
import styled from 'styled-components'
import { colors } from '../../theme'
import { useGetUserQuery } from '../../store/services/githubApi'

type Props = {
  children: ReactNode
  url: string
  title: string
}
export type TUser = {
  id: React.Key
  html_url: string
  login: string
  avatar_url: string
}

const Link = styled.a`
  position: relative;
  display: inline-block;

  > span {
    visibility: hidden;
    position: absolute;
    left: 45px;
    bottom: 100%;
    transform: translateX(-60%);

    padding: 0.3rem 0.7rem;
    min-width: 10ch;

    border-radius: 6px;
    z-index: 1;
    opacity: 0;
    transition: opacity 0.3s;

    font-size: 0.6rem;
    background-color: ${colors.redPink};
    color: ${colors.white};
    text-align: center;

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

function Profile({ children, url, title }: Props) {
  const [skip, setSkip] = useState(true)
  const { data, isSuccess } = useGetUserQuery(title, { skip })
  const handleGetUserOnMouseOver = useCallback(() => setSkip(false), [])

  return (
    <Link href={url} target="_blank" rel="noreferrer" onMouseOver={handleGetUserOnMouseOver}>
      {children}
      <span>{isSuccess ? data.name || title : 'ᓚᘏᗢ'}</span>
    </Link>
  )
}

export default styled(Profile)``

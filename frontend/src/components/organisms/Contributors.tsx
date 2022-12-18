import React from 'react'
import styled from 'styled-components'
import { useGetContributorsQuery } from '../../store/services/githubApi'
import { Loading } from '../atoms'
import Profile, { TUser } from './Profile'

const ContributorsStyled = styled.div.attrs({ className: 'contributors-avatar' })`
  --width-height: 62px;
  margin: 0;
  padding: 0 3rem 0 3rem;
  > ul {
    padding: 0;
    margin: 0;
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
  }
`

const Avatar = styled.img`
  width: var(--width-height);
  height: var(--width-height);
  margin: 0.64rem;
  border-radius: 50%;
  transition: box-shadow 0.1s ease;
  &:hover {
    box-shadow: 0px 10px 13px -7px #0000004b, 5px -16px 0px -10px rgba(0, 0, 0, 0);
  }
`

function Contributors() {
  const { data, isLoading, isFetching, isError, isUninitialized } = useGetContributorsQuery(null)
  if (isUninitialized) return <p>getting started...</p>
  if (isLoading) return <Loading size={100} />
  if (isFetching) return <p>fetching data...</p>
  if (isError) return <p>No contributors to display :-( </p>

  return (
    <ContributorsStyled data-testid="contributors">
      <ul>
        {data?.map((user: TUser) => (
          <Profile key={user.id} url={user.html_url} title={user.login}>
            <Avatar src={user.avatar_url} alt={user.login} />
          </Profile>
        ))}
      </ul>
    </ContributorsStyled>
  )
}

export default styled(Contributors)``

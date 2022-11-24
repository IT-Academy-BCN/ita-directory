// @ts-nocheck
import styled from 'styled-components'
import { useGetContributorsQuery } from '../../store/services/githubApi'
import Loading from '../atoms/Contributors/Loading'
import Profile from '../atoms/Contributors/Profile'

const ContributorsStyled = styled.div`
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
  const { data, isLoading } = useGetContributorsQuery()
  if (isLoading) return <Loading />

  return (
    <ContributorsStyled>
      <ul>
        {data?.map((d) => (
          <Profile key={d.id} url={d.html_url} title={d.login}>
            <Avatar src={d.avatar_url} alt={d.login} />
          </Profile>
        ))}
      </ul>
    </ContributorsStyled>
  )
}

export default styled(Contributors)``

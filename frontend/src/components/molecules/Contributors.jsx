// @ts-nocheck
import styled from 'styled-components'
import { useGetContributorsQuery } from '../../store/services/githubApi'

const Container = styled.div`
  --width-height: 62px;
  & > ul {
    background-color: pink;
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
`

function Contributors() {
  const { data, isFetching, isError } = useGetContributorsQuery()
  // eslint-disable-next-line no-console
  console.log('fetching:', isFetching, 'error:', isError)

  return (
    <Container>
      <ul>
        {data?.map((d) => (
          <Avatar key={d.id} src={d.avatar_url} alt={d.login} />
        ))}
      </ul>
    </Container>
  )
}

export default Contributors

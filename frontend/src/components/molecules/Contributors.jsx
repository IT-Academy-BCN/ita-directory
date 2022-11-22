// @ts-nocheck
import styled from 'styled-components'
import { useGetContributorsQuery } from '../../store/services/githubApi'

const Avatar = styled.img`
  width: 70px;
  height: 70px;
  padding: 0.3rem;
  border-radius: 50%;
`

function Contributors() {

  const { data, isError } = useGetContributorsQuery()
  console.log('error', isError)

  return (
    <div>
      <ul>
        {data?.map((d) => (
          <Avatar key={d.id} src={d.avatar_url} alt={d.login} />
        ))}
      </ul>
    </div>
  )
}

export default Contributors

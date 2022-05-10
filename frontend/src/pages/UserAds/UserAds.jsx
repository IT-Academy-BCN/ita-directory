import React, { useState, useEffect } from 'react'
import AdCard from './Ad/Ad'
import Body from '../../components/layout/Body/Body'
import { StyledCard, StyledUserAds } from './UserAds.style'
import { Container } from '../../theme'
import { Text } from '../../components/atoms'

const REQ_STATUS = {
  INITIAL: 'INITIAL',
  LOADING: 'LOADING',
  SUCCESS: 'SUCCESS',
  FAILURE: 'FAILURE',
}

function UserAds() {
  const [ads, setAds] = useState([])
  const [fetchStatus, setFetchStatus] = useState(REQ_STATUS.INITIAL)

  useEffect(() => {
    setFetchStatus(REQ_STATUS.LOADING)
    fetch('https://api-casas.kevinmamaqi.com/api-casas')
      .then((res) => res.json())
      .then((res) => {
        setAds(res.slice(0, 3))
        setFetchStatus(REQ_STATUS.SUCCESS)
      })
      .catch((e) => {
        setFetchStatus(REQ_STATUS.FAILURE)
      })
  }, [])

  return (
    <Body title="Mis anuncios">
      <Container row>
        <StyledUserAds>
          {(fetchStatus === REQ_STATUS.INITIAL || fetchStatus === REQ_STATUS.LOADING) && (
            <Text>Loading...</Text>
          )}
          {fetchStatus === REQ_STATUS.SUCCESS ? (
            <>
              {ads.map((ad) => (
                <StyledCard key={ad.id}>
                  <AdCard key={ad.id} ad={ad} containerClassName="cardContainer" />
                </StyledCard>
              ))}
            </>
          ) : (
            'Ha habido un error con tu petición'
          )}
        </StyledUserAds>
      </Container>
    </Body>
  )
}
export default UserAds

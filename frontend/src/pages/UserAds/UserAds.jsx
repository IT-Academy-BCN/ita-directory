/* eslint-disable react/no-array-index-key */
/* eslint-disable no-nested-ternary */
import React, { useState, useEffect } from 'react'
import AdCard from '../AdList/AdCard/AdCard'
import Body from '../../components/layout/Body/Body'
// import {getUserAds} from "api/user";
import { StyledCard, StyledUserAds } from './UserAds.style'
import { Container } from '../../theme'

const REQ_STATUS = {
  INITIAL: 'INITIAL',
  LOADING: 'LOADING',
  SUCCESS: 'SUCCESS',
  FAILURE: 'FAILURE',
}

function UserAds() {
  // const USER_ID = 1; //TODO change when login works
  const [ads, setAds] = useState([])
  const [fetchStatus, setFetchStatus] = useState(REQ_STATUS.INITIAL)

  useEffect(() => {
    setFetchStatus(REQ_STATUS.LOADING)
    fetch('https://api-casas.kevinmamaqi.com/api-casas')
      .then((res) => res.json())
      .then((ad) => {
        setAds(ad.slice(0, 3))
        setFetchStatus(REQ_STATUS.SUCCESS)
      })
      .catch((e) => {
        setFetchStatus(REQ_STATUS.FAILURE)
        return e
      })
  }, [])

  return (
    <Body title="Mis anuncios" isLoggedIn>
      <Container row>
        <StyledUserAds>
          {fetchStatus === REQ_STATUS.INITIAL || fetchStatus === REQ_STATUS.LOADING ? (
            'loading...'
          ) : fetchStatus === REQ_STATUS.SUCCESS ? (
            <>
              {ads.map((ad, i) => (
                <StyledCard key={i}>
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

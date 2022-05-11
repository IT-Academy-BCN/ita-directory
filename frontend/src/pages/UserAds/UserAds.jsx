/* eslint-disable react/no-array-index-key */
/* eslint-disable no-nested-ternary */
import React, { useState, useEffect } from 'react'
import styled from 'styled-components'
import Ad from './Ad/Ad'
import Body from '../../components/layout/Body/Body'
import { Container, colors } from '../../theme'
import { Text } from '../../components/atoms'

const StyledUserAds = styled.div`
  display: flex;
  flex-direction: column;
  padding-top: 3rem;
`

const StyledCard = styled.div`
  padding-top: 1rem;
  padding-bottom: 0.75rem;

  .cardContainer {
    background: ${colors.white};
    box-shadow: none;
    border: none;
    border-radius: 0;
    border-bottom: 1px solid ${colors.grey};
    padding-bottom: 2rem;

    & > div:last-of-type {
      padding-bottom: 0;
      padding-left: 2.5rem;
    }
  }

  &:last-of-type {
    .cardContainer {
      border: none;
    }
  }

  .descriptionContainer {
    justify-content: flex-start;

    > label {
      margin-right: 1rem;
    }
  }
  .titleClassName {
    text-align: left;
    color: ${colors.darkRed};
    font: normal normal normal 24px/32px Korb-Bold;
    letter-spacing: 0px;
    opacity: 1;
  }
`

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
                  <Ad key={ad.id} ad={ad} containerClassName="cardContainer" />
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
export default styled(UserAds)``

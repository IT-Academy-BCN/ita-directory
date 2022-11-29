import React, { useEffect, useState } from 'react'
import styled from 'styled-components'
import { useHistory } from 'react-router-dom'
import UserAdsCard from './UserAdsCard/UserAdsCard'
import Body from '../../components/layout/Body/Body'
import { Container } from '../../theme'
import AdListFilter from '../AdList/AdListFilter/AdListFilter'
import axiosInstance from '../../utils/axiosInstance'
import { FlexBox } from '../../theme/wrappers'
import useUser from '../../hooks/useUserHook'

type TPropsFlexBox = {
  flexDirection: string
}

const AdListStyled = styled(FlexBox)<TPropsFlexBox>``

const AdsStyled = styled(Container)`
  justify-content: flex-start;
  align-items: flex-start;

  ${AdListFilter} {
  }

  ${AdListStyled} {
    width: 70%;
    flex-grow: 1;
  }
`

function UserAds() {
  const [adList, setAdList] = useState([])
  const [loading, setLoading] = useState(true)

  const history = useHistory()

  const user = useUser()
  let userId: number = 0

  if (user) {
    userId = user.id
  }

  useEffect(() => {
    const fetchAds = async () => {
      const result = await axiosInstance.get(`/ads/user/${userId}`)
      setAdList(result.data.data)
      setLoading(false)
    }
    fetchAds()
  }, [user, userId])

  type TAdCardProps = {
    id: number
    userId: number
    title: string
    description: string
    city: string
    nRooms: number
    price: number
    squareMeters: number
    nBathrooms: number
    mapLat: string
    mapLon: string
    key: string
  }
  const renderList = adList.map((e: TAdCardProps) => (
    <UserAdsCard
      id={e.id}
      title={e.title}
      description={e.description}
      city={e.city}
      nRooms={e.nRooms}
      price={e.price}
      squareMeters={e.squareMeters}
      key={e.id}
      onClick={() => history.push(`/edit-ad/${e.id}`)}
    />
  ))
  return (
    <Body title="Mis Anuncios" justifyTitle="flex-start">
      <AdsStyled data-testid="adListStyled">
        {!loading ? (
          <AdListStyled flexDirection="column">{renderList}</AdListStyled>
        ) : (
          <p>Loading...</p>
        )}
      </AdsStyled>
    </Body>
  )
}
export default UserAds

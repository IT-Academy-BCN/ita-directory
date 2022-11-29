import React, { useEffect, useState, useMemo } from 'react'
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

type TAdProps = {
  price: number
  squareMeters: number
}
type TFunctionFilter = (min: number, max: number) => (ad: TAdProps) => boolean

type TFilterParms = {
  minPrice?: number
  maxPrice?: number
  minSize?: number
  maxSize?: number
}

function UserAds() {
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const [filterParams, setFilterParams] = useState<TFilterParms | undefined>()
  const [adList, setAdList] = useState([])
  const [loading, setLoading] = useState(true)

  const history = useHistory()

  // Added filters by Kevin
  const byPrice: TFunctionFilter = (min, max) => (ad) => {
    if (min == null && max == null) return true
    return min <= ad.price && ad.price <= max
  }

  const bySize: TFunctionFilter = (min, max) => (ad) => {
    if (min == null && max == null) return true
    return min <= ad.squareMeters && ad.squareMeters <= max
  }
  const user = useUser()

  useEffect(() => {
    const fetchAds = async () => {
      const result = await axiosInstance.get(`/ads/user/${user.id}`)
      setAdList(result.data.data)
      setLoading(false)
    }
    fetchAds()
  }, [user])

  const filteredAdList = useMemo(() => {
    const filteredAds = adList
      .filter(byPrice(filterParams?.minPrice || 0, filterParams?.maxPrice || Infinity))
      .filter(bySize(filterParams?.minSize || 0, filterParams?.maxSize || Infinity))
    return filteredAds
  }, [filterParams, adList])

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
  const renderList = filteredAdList.map((e: TAdCardProps) => (
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

import React, { useState, useEffect } from 'react'
import styled from 'styled-components'
import { useParams } from 'react-router-dom'
import Body from '../../components/layout/Body/Body'
import { Button, Text, Icon } from '../../components/atoms'
import { device, colors, font } from '../../theme'
import { Gallery, ContactModal, Map } from '../../components/organisms'
import {
  adImage1,
  adImage2,
  adImage3,
  adThumbnail1,
  adThumbnail2,
  adThumbnail3,
} from '../../assets/images'
import axiosInstance from '../../utils/axiosInstance'

const AdStyled = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;

  @media only ${device.Tablet} {
    display: flex;
    flex-direction: column;
    align-items: center;
  }

  .ad__title {
    color: ${colors.darkRed};
    font-weight: bold;
    font-size: ${font.xl};
    text-align: center;

    .Bottom {
      display: flex;
      flex-direction: column;
      width: 85%;
      padding: 2rem;
      align-items: space-between;
      justify-content: space-between;
      flex-wrap: wrap;
      font-size: ${font.base};
      padding-right: 1.5rem;
      margin-top: 1rem;

      @media only ${device.Laptop} {
        display: flex;
        flex-direction: row;
        padding-bottom: 3rem;
        padding-top: 2rem;
      }
    }
  }
`

const AdPropertiesText = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 1rem;
  font-size: ${font.xss};
  text-align: left;
  line-height: 1.5;
  padding-bottom: 1rem;
  color: ${colors.grey};
  font-weight: 600;

  & > div {
    display: flex;
    flex-direction: row;
    gap: 5px;
  }

  @media ${device.Laptop} {
    justify-content: space-between;
    flex-wrap: nowrap;
  }

  @media only ${device.Tablet} {
    font-size: ${font.base};
    line-height: 1.5;
    padding-bottom: 1rem;
  }
`

const AdDescriptionText = styled.div`
  display: flex;
  gap: 1rem;
  font-size: ${font.base};
  text-align: left;
  line-height: 1.5;
  color: ${colors.grey};
  font-weight: bold;
`

const ButtonContainer = styled.div`
  display: flex;
  align-self: start;
  padding-top: 2rem;
`

const AdTextWrapper = styled.div`
  display: flex;
  flex-direction: column;
  font-size: ${font.xss};
  padding: 3rem;
  width: 100%;

  @media ${device.Laptop} {
    display: grid;
    grid-template-columns: 30% 1fr;
    padding: 5rem;
  }
`
const GridColumn = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
`
const EmptyColumn = styled(GridColumn)`
  grid-column: 1 / 2;
`

const StyledStreet = styled.p`
  a {
    color: ${colors.black};
    text-decoration: none;
  }
`

interface AdProps {
  id: string
  title: string
}

interface Props {
  adStatusId: number
  adTypeId: number
  city: string
  createdAt: string
  description: string
  id: number
  includedExpenses: true
  mapLat: number
  mapLon: number
  nBathrooms: number
  nRooms: number
  price: number
  squareMeters: number
  title: string
  updatedAt: string
  userId: number
}

function Ad() {
  const { id }: AdProps = useParams()
  const [ad, setAd] = useState<Props | null>(null)
  const [active, setActive] = useState(false)

  useEffect(() => {
    const getAd = async () => {
      try {
        const response = await axiosInstance.get(`/ads/${id}`)
        setAd(response.data.data)
      } catch (error) {
        throw new Error(`${error}`)
      }
    }
    getAd()
  }, [id])

  const images = [
    {
      original: adImage1,
      thumbnail: adThumbnail1,
      originalAlt: 'Bedroom',
      thumbnailAlt: 'Bedroom',
    },
    {
      original: adImage2,
      thumbnail: adThumbnail2,
      originalAlt: 'Bedroom2',
      thumbnailAlt: 'Bedroom2',
    },
    {
      original: adImage3,
      thumbnail: adThumbnail3,
      originalAlt: 'Casa piscina',
      thumbnailAlt: 'Casa piscina',
    },
  ]

  return (
    <div>
      {ad && (
        <Body title="Anuncio" justifyTitle="flex-start" isLoggedIn>
          <AdStyled>
            <Text text={ad.title} className="ad__title" />
            <Gallery images={images} />
            <AdTextWrapper>
              <EmptyColumn />
              <GridColumn>
                <AdPropertiesText>
                  <div>
                    <Icon name="pin_drop" />
                    <Text as="span" text={`${ad.city}`} className="ad__property-city" />
                  </div>
                  <div>
                    <Icon name="bed" />
                    <Text
                      as="span"
                      text={`${ad.nRooms} habitaciones`}
                      className="ad__property-rooms"
                    />
                  </div>
                  <div>
                    <Icon name="euro" />
                    <Text as="span" text={`${ad.price} €`} className="ad__property-price" />
                  </div>
                  <div>
                    <Icon name="home" />
                    <Text
                      as="span"
                      text={`${ad.squareMeters}m2`}
                      className="ad__property-square-meters"
                    />
                  </div>
                  <div>
                    <Icon name="bathtub" />
                    <Text
                      as="span"
                      text={`${ad.nBathrooms} Baños`}
                      className="ad__property-bathrooms"
                    />
                  </div>
                </AdPropertiesText>
                <AdDescriptionText>
                  <Text as="p" text={`"${ad.description}"`} className="ad__description" />
                </AdDescriptionText>
                <Map lat={ad.mapLat} lng={ad.mapLon} coordinates={[ad.mapLat, ad.mapLon]} />
                <StyledStreet>
                  <a href={`http://www.google.com/maps/place/${ad.mapLat},${ad.mapLon}`}>
                    Dirección: Carrer Trafalgar 4
                  </a>
                </StyledStreet>
                <ButtonContainer>
                  <Button
                    buttonStyles={{
                      width: '7.5rem',
                      fontsize: '12px',
                      margin: 'auto',
                    }}
                    text="Contacto"
                    className="blue-gradient"
                    type="button"
                    onClick={() => setActive(true)}
                  />
                </ButtonContainer>
              </GridColumn>
              <ContactModal active={active} hideModal={() => setActive(false)} />
            </AdTextWrapper>
          </AdStyled>
        </Body>
      )}
    </div>
  )
}

export default Ad

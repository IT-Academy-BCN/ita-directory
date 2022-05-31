import React, { useState, useEffect } from 'react'
import styled from 'styled-components'
import { useParams } from 'react-router-dom'
import Body from '../../components/layout/Body/Body'
import { Button, Text, Icon } from '../../components/atoms'
import { device, colors } from '../../theme'
import { Gallery, ContactModal, Map } from '../../components/organisms'
import {
  adImage1,
  adImage2,
  adImage3,
  adThumbnail1,
  adThumbnail2,
  adThumbnail3,
} from '../../assets/images'
import { getAd } from '../../api/ads'

// const LIST_ICONS = [
// 	{name: ad.city, icon: faMapMarkerAlt},
// 	{name: `${ad.numRooms} habitaciones`, icon: faBed},
// 	{name: ad.monthlyRent, icon: faEuroSign}, //monthlyRent o precio del piso?
// 	{name: ad.squareMeters, icon: faHome},
// 	{name: `${ad.numBaths} baños`, icon: faBath},
// ];

// const LIST_ICONS = ad && [
//   { name: ad.city, icon: faMapMarkerAlt },
//   { name: `${ad.n_rooms} habitaciones`, icon: faBed },
//   { name: ad.price, icon: faEuroSign },
//   { name: ad.square_meters, icon: faHome },
//   { name: `${ad.n_bathrooms} baños`, icon: faBath },
// ]

function Ad() {
  const { id } = useParams()

  const [ad, setAd] = useState(null)
  const [active, setActive] = useState(false)

  useEffect(() => {
    getAd(id).then((data) => setAd(data))
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
        <Body
          title="Anuncio"
          justifyTitle="flex-start"
          paddingTitle="0px"
          paddingTitle2="15vw"
          isLoggedIn
        >
          <div>
            <AdStyled>
              <Text text={`${ad.title}`} className="ad__title" />
              <Gallery images={images} />

              <AdTextWrapper>
                <AdPropertiesText>
                  <div>
                    <Icon name="pin_drop" />
                    <Text as="span" text={`${ad.city}`} className="ad__property-city" />
                  </div>
                  <div>
                    <Icon name="bed" />
                    <Text
                      as="span"
                      text={`${ad.n_rooms} habitaciones`}
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
                      text={`${ad.square_meters}m2`}
                      className="ad__property-square-meters"
                    />
                  </div>
                  <div>
                    <Icon name="bathtub" />
                    <Text
                      as="span"
                      text={`${ad.n_bathrooms} Baños`}
                      className="ad__property-bathrooms"
                    />
                  </div>
                  {/* <Text as="span" text={`${title} en ${city}`} className="ad-card__address">
                    Description: {ad.description}
                  </Text> */}
                </AdPropertiesText>
                <AdDescriptionText>
                  <Text as="p" text={`"${ad.description}"`} className="ad__description" />
                </AdDescriptionText>
                <Map lat={ad.map_lat} lng={ad.map_lon} />
                <StyledStreet>
                  <a href={`http://www.google.com/maps/place/${ad.map_lat},${ad.map_lon}`}>
                    Dirección: Carrer Trafalgar 4
                  </a>
                </StyledStreet>
                <Button
                  buttonStyles={{
                    width: '7.5rem',
                    fontsize: '12px',
                    marginTop: '0rem',
                  }}
                  text="Contacto"
                  className="blue-gradient"
                  type="button"
                  onClick={() => setActive(true)}
                />
                <ContactModal active={active} hideModal={() => setActive(false)} />
              </AdTextWrapper>
            </AdStyled>
          </div>
        </Body>
      )}
    </div>
  )
}

export default Ad

const AdStyled = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  align-items: right;
  margin-left: 1rem;
  margin-right: 1.5rem;

  @media only ${device.Tablet} {
    display: flex;
    flex-direction: column;
    align-items: center;
  }

  .ad__title {
    color: ${colors.darkRed};
    padding-top: 0.5rem;
    padding-bottom: 1.5rem;
    font-weight: bold;
    font-size: 36px;
    text-align: center;

    .Bottom {
      display: flex;
      flex-direction: column;
      width: 85%;
      padding-bottom: 3rem;
      padding-top: 2rem;
      padding-left: 2rem;
      padding-right: 2rem;
      align-items: space-between;
      justify-content: space-between;
      flex-wrap: wrap;
      font-size: 16px;
      padding-right: 1.5rem;
      margin-top: 1rem;

      @media only ${device.Laptop} {
        display: flex;
        flex-direction: row;
        width: 70%;
        padding-bottom: 3rem;
        padding-top: 2rem;
      }
    }
  }
`

// const StyledUl = styled.ul`
//   display: flex;
//   flex-direction: row;
//   align-items: flex-start;
//   justify-content: flex-start;
//   flex-wrap: wrap;
//   font-size: 16px;
//   margin-top: 1rem;
// `

const AdPropertiesText = styled.div`
  display: flex;
  gap: 1rem;
  font-size: 14px;
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

  @media only ${device.Tablet} {
    font-size: 16px;
    text-align: left;
    line-height: 1.5;
    padding-bottom: 1rem;
  }
`
const AdDescriptionText = styled.div`
  display: flex;
  gap: 1rem;
  font-size: 16px;
  text-align: left;
  line-height: 1.5;
  color: ${colors.grey};
  font-weight: bold;
`

const AdTextWrapper = styled.div`
  display: flex;
  flex-direction: column;
  width: 90%;
  align-self: flex-end;
  padding-bottom: 3rem;
  padding-top: 2rem;
  padding-left: 2rem;
  padding-right: 2rem;
  font-size: 12px;

  @media only ${device.Laptop} {
    display: flex;
    flex-direction: column;
    align-items: space-between;
    justify-content: right;
    flex-wrap: wrap;
    font-size: 16px;
    width: 70%;
    padding-right: 1.5rem;
    margin-top: 1rem;
  }
`

// const StyledButton = styled.button`
//   margin: 0;
//   padding: 0;
// `

const StyledStreet = styled.p`
  font-style: italic;
  text-decoration: underline;
`

// const StyledItems = styled.li`
//   list-style: none;
//   margin-left: 0.5rem;
// `

import React from 'react'
import styled from 'styled-components'
import { colors, device, dimensions } from '../../theme'
import ColaboradoresBanner from '../../assets/logos/Colaboradores-Banner.jpg'
import BarcelonaBanner from '../../assets/logos/barcelona-banner.jpg'
import Contributors from '../organisms/Contributors'
import { Text } from '../atoms'
import { FlexBox } from '../../theme/wrappers'

type TBanner = {
  students?: boolean
}

const BannerStyled = styled(FlexBox)`
  @media ${device.Desktop} {
    padding: ${dimensions.spacing.none} 11rem;
  }
  @media ${device.Laptop} {
    padding: ${dimensions.spacing.none} 6rem;
  }
  @media ${device.Tablet} {
    padding: ${dimensions.spacing.none} 8rem;
  }

  .colaboradores-text {
    margin-top: 25rem;
  }
  .contributors-avatar {
    margin-top: ${dimensions.spacing.lg};
  }
  .footer {
    margin-bottom: ${dimensions.spacing.lg};
  }
  .directorio {
    margin-top: 25rem;
  }
  h4 {
    font-size: ${dimensions.spacing.md};
    line-height: ${dimensions.spacing.lg};
    font-weight: bold;
    margin-bottom: ${dimensions.spacing.none};
    color: ${colors.redPink};
  }
`
const Img = styled.img`
  position: absolute;
  left: ${dimensions.spacing.none};
  height: 23rem;
  width: 100%;
  object-fit: cover;
  object-position: bottom;
`

function Banner({ students }: TBanner) {
  const srcImg = students ? ColaboradoresBanner : BarcelonaBanner

  return (
    <>
      {/* @ts-ignore, TODO: Fix when FlexBox.js is migrated to ts */}
      <BannerStyled flexDirection="column" alignItems="center">
        <Img src={srcImg} alt="image banner" />
        {students ? (
          <>
            <Text
              as="h4"
              className="colaboradores-text"
              title="contributors"
              text="Colaboradores"
            />
            <Text title="description" text="Usuarios de github.com que han contribuido" />
            <Contributors />
            <Text as="h4" title="profiles" text="Perfiles" />
            <Text
              className="footer"
              title="footer"
              text="ReactJS y Node Juniors Developers en Barcelona"
            />
          </>
        ) : (
          <Text
            as="h4"
            title="directory"
            className="directorio"
            text="Un directorio abierto desarrollado por los alumnos de Barcelona Activa"
          />
        )}
      </BannerStyled>
    </>
  )
}

export default styled(Banner)``

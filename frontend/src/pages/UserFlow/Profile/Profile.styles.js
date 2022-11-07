import styled from 'styled-components'
import { device, colors } from '../../../theme'
import { FlexBox } from '../../../theme/wrappers'

export const ProfileWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  width: 100%;
  max-width: 85%;
  padding: 3rem;
  background-color: ${colors.extraLightGrey};
  border-radius: 0.5em;
  margin-bottom: 2rem;
`

export const ProfileForm = styled.form`
  display: flex;
  justify-content: center;
  flex-direction: row;
  gap: 2rem 2rem;
  color: #4a4a4a;

  & > div,
  & > button {
    align-items: center;
    row-gap: 1.5rem;

    @media only ${device.Tablet} {
      align-items: flex-start;
    }
  }

  &:not(:first-of-type) {
    padding-top: 2rem;
  }

  &:not(:last-of-type) {
    border-bottom: 1px solid ${colors.lightGray};
    padding-bottom: 2rem;
  }

  &.uploadphoto-modal {
    align-items: center;
  }
  &.profile-photo {
    flex-direction: column;
    align-items: center;

    @media only ${device.Tablet} {
      flex-direction: row;
      justify-content: flex-start;
      column-gap: 3rem;
    }

    & + div {
      height: fit-content;
    }

    & p {
      font-size: 0.75em;
      font-weight: 300;
      text-align: center;

      @media only ${device.Tablet} {
        text-align: left;
        font-size: 0.9em;
      }
    }

    & .info-photo-uploaded {
      padding-left: 1em;
      color: ${colors.darkRed};
      font-style: italic;
    }
  }

  &.profile-data {
    flex-direction: column;

    > div {
      display: flex;
      margin: 0;

      flex-direction: column;
      justify-content: stretch;
      row-gap: 1rem;

      @media only ${device.Tablet} {
        flex-direction: row;
        column-gap: 2rem;
      }

      > div {
        display: flex;
        flex-direction: column;
        width: 100%;

        @media ${device.Mobile} {
          width: 75%;
        }
        @media ${device.Tablet} {
          width: 50%;
        }

        p {
          font-style: italic;
          font-size: 0.7em;
          margin-top: 0.5em;

          a {
            color: ${colors.darkRed};

            &:hover {
              color: ${colors.darkBlue};
            }
          }
        }
      }
    }

    label,
    label p {
      width: 100%;
      font-size: 0.8em;
    }

    label p {
      font-weight: 300;
    }
  }
`

export const ProfileImageStyle = styled(FlexBox)`
  width: 10rem;
  background-color: white;
  border-radius: 0.25rem;
  box-shadow: 0 2px 7px ${colors.darkerShadow};
  padding: 0.5rem;
  img {
    width: 100%;
  }
`

export const ProfileUploadPhoto = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;

  p:first-of-type {
    font-size: 1.3em;
    margin-bottom: 0.4rem;
  }
`

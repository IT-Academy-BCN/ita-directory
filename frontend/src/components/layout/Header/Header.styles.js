import styled from 'styled-components'
import { device, colors } from '../../../theme'

export const HeaderStyled = styled.header`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  flex-direction: column;

  .header__container {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-between;
    width: 100%;
    margin-top: 0.25rem;
    margin-bottom: 1rem;

    @media ${device.Tablet} {
      flex-direction: row;
    }

    .header__logo-group {
      display: flex;
      align-items: center;
      justify-content: ${(props) => (props.justifyTitle ? 'center' : 'left')};
      width: 229px;
      color: ${(props) => (props.logoColor ? props.logoColor : colors.darkRed)};
      /* font-family: Roboto Mono Medium for Powerline; */
      font-size: 15px;
      opacity: 1;
      text-decoration: none;

      & .header__logo {
        width: 144px;
        height: 36px;

        &:hover {
          transform: scale(1.04);
        }
      }
      & .header__logo-text {
        font-family: monospace;
        font-size: 1rem;
        font-weight: bold;
        margin-left: 5px;
        width: 77px;
        display: flex;
        align-self: center;
        /* height: 18px; */
        letter-spacing: -1.5px;
        color: ${colors.redPink};
      }
    }

    .header__profile {
      .header__profile-button {
        display: flex;
        align-items: center;
        justify-content: center;
        /* border: none; */
        background-color: white;
        box-shadow: 0 2px 4px ${colors.darkerShadow};
        border: 0;
        border-radius: 0.5rem;
        padding: 0.3rem 0.5rem;
        position: relative;
        color: ${colors.grey};
        margin-top: 1rem;

        @media ${device.Tablet} {
          margin-top: 0;
        }

        border-left: 0.3rem solid white;
        border-right: 0.3rem solid white;
        &:hover {
          /* box-shadow: 0 2px 0.4rem ${colors.redPink}; */
          border-left: 0.3rem solid ${colors.redPink};
          border-right: 0.3rem solid ${colors.redPink};
        }

        .header__profile-image {
          width: 32px;
          height: 32px;
          border-radius: 16px;
          object-fit: cover;
          margin-right: 12px;
        }

        .header__profile-title {
          font-size: 18px;
          display: inline;
          white-space: pre;
        }

        &:hover {
          cursor: pointer;
        }
      }

      .header__profile-dropdown {
        position: absolute;
        padding: 0;
        z-index: 1;
        top: 103px;
        text-align: center;
        background: transparent 0% 0% no-repeat padding-box;
        border: 1px solid ${colors.lighterGrey};
        border-radius: 10px;
        opacity: 1;

        @media ${device.Tablet} {
          top: 50px;
        }
      }
    }
  }
`

export const StyledSubHeader = styled.div`
  width: 100vw;
  background-color: ${(props) =>
    props.headerColor ? props.headerColor : `${colors.transparentBlue}`};
  border: ${(props) => (props.headerColor ? `` : `1px solid ${colors.palerBlue}`)};
  border-left: none;
  border-right: none;
  margin-bottom: 1rem;
  padding: 10px;

  h1 {
    width: 100%;
    font-size: 26px;
    line-height: 36px;
    font-weight: normal;
    text-align: ${(props) => (props.justifyTitle ? 'center' : 'left')};
    color: ${(props) => (props.fontColor ? props.fontColor : `${colors.grey}`)};
  }
`

// export const StyledMiPerfil = styled.div`
// 	position: relative;
// 	display: inline-block;
// `;

// export const StyledLogo = styled.div`
// 	display: flex;
// 	justify-content: flex-end;
// 	align-items: center;
// 	text-align: left;
// 	max-width: 50%;
// 	color: ${colors.grey};
// 	text-transform: none;
// 	opacity: 1;
// 	border-radius: 10px;
// 	border: 0px 1px 1px 1px solid ${colors.maroon};
// 	box-shadow: 1px 4px 8px 0 ${colors.shadow}, 1px 6px 20px 0 ${colors.lighterShadow};
// 	padding: 6px;
// 	margin-left: 1060px;
// `;

// export const StyledImg = styled.img`
// 	width: 35px;
// 	height: 35px;
// 	border-radius: 50%;
// 	margin-left: 0px;
// 	margin-right: 5px;
// `;

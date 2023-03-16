import styled from 'styled-components'
import { colors, dimensions } from '../../theme'

const Ol = styled.ol``

const Li = styled.li`
  border: 1px solid ${colors.lighterGrey};
  align-items: center;
  text-align: left;
  padding-left: 15px;
  min-width: 6rem;
  width: 150px;
  display: block;
  background-color: ${colors.white};
  position: relative;
  z-index: 2;
  line-height: ${dimensions.spacing.xl};
  border-bottom: ${dimensions.spacing.none};
  right: ${dimensions.spacing.none};

  border-left: 0.3rem solid white;
  border-right: 0.3rem solid white;

  &:hover {
    border-left: 0.3rem solid ${colors.redPink};
    border-right: 0.3rem solid ${colors.redPink};
  }

  &:first-child {
    border-top-right-radius: ${dimensions.borderRadius.sm};
    border-top-left-radius: ${dimensions.borderRadius.sm};
  }

  &:last-child {
    border-bottom-right-radius: ${dimensions.borderRadius.sm};
    border-bottom-left-radius: ${dimensions.borderRadius.sm};
  }
`

const Ul = styled.ul`
  list-style-type: none;
  padding: ${dimensions.spacing.none};
  margin-top: 10px;
  position: absolute;
  box-shadow: 0px 4px 10px ${colors.darkerShadow};
  background: transparent;
  border-radius: ${dimensions.borderRadius.sm};
`

const Lists = styled.ul`
  list-style: none;
  padding-left: ${dimensions.spacing.none};
  margin: ${dimensions.spacing.none}${dimensions.spacing.base} 0.3rem ${dimensions.spacing.none};
  text-align: left;
  display: flex;
  flex-direction: column;

  ul {
    margin: ${dimensions.spacing.none};
    padding: ${dimensions.spacing.none};
    list-style: none;
  }
  ${Li} {
    list-style: none;
  }
`
const Dl = styled.dl``

const Dt = styled.dt``

const Dd = styled.dd``

export { Li, Lists, Ol, Dl, Dt, Dd, Ul }

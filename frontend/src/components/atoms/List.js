import styled from 'styled-components'
import { colors } from '../../theme'

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
  line-height: 2.5rem;
  border-bottom: 0;
  right: 0;

  border-left: 0.3rem solid white;
  border-right: 0.3rem solid white;

  &:hover {
    /* box-shadow: 0 2px 0.4rem ${colors.redPink}; */
    border-left: 0.3rem solid ${colors.redPink};
    border-right: 0.3rem solid ${colors.redPink};
  }

  &:first-child {
    border-top-right-radius: 6px;
    border-top-left-radius: 6px;
  }

  &:last-child {
    border-bottom-right-radius: 6px;
    border-bottom-left-radius: 6px;
  }
`

const Ul = styled.ul`
  list-style-type: none;
  padding: 0px;
  margin-top: 10px;
  position: absolute;
  box-shadow: 0px 4px 10px ${colors.darkerShadow};
  background: transparent;
  border-radius: 6px;
`

const Lists = styled.ul`
  list-style: none;
  padding-left: 0;
  margin: 0;
  text-align: left;
  display: flex;
  flex-direction: column;
  margin-bottom: 0.2rem;
  margin-right: 1rem;

  ul {
    margin: 0;
    padding: 0;
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

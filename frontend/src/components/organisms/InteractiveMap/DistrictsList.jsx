/* eslint-disable jsx-a11y/mouse-events-have-key-events */
import React, { useState, useEffect, useContext } from 'react'
import styled from 'styled-components'
import MapContext from './store/context'
import allDistricts from './data/all-districts'
import { MAP_ACTIONS } from './store/reducer'
import { Container, GridItem } from './mapOfDistrictsStyles'
import { device } from '../../../theme'
import { Lists } from '../../atoms'

const StyledList = styled.div`
  cursor: pointer;
  width: 40%;
  margin-bottom: 0.7rem;

  @media ${device.Tablet} {
    width: 30%;
  }
  .district {
    font-size: 12px;
    font-weight: bold;
    margin: 0;
    margin-bottom: 0.3rem;
    text-align: left;
  }

  .neighborhood {
    text-indent: 0rem;
    text-align: left;
    font-size: 0.8rem;
    padding: 0.2rem 0;
    margin: 0;
    display: none;

    @media ${device.Mobile} {
      font-size: 0.6rem;
      padding: 0.2rem 0;
    }
    @media ${device.Tablet} {
      display: block;
    }
  }
  @media ${device.Desktop} {
    width: 100%;
  }

  .lit-neighborhood,
  .lit-district,
  .district:hover {
    background-color: #db2c7f;
    color: #fff;
  }
`

function DistrictsList() {
  const { state, dispatch } = useContext(MapContext)
  const [leftColumnDistricts, setLeftColumnDistricts] = useState([])
  const [rightColumnDistricts, setRightColumnDistricts] = useState([])
  const [centerLColumnDistricts, setCenterLColumnDistricts] = useState([])
  const [centerRColumnDistricts, setCenterRColumnDistricts] = useState([])

  useEffect(() => {
    if (allDistricts) {
      const left = allDistricts.filter(
        (el) =>
          el.district === 'Ciutat-Vella' ||
          el.district === 'L-Eixample' ||
          el.district === 'Sants-Montjuic' ||
          el.district === 'Les-Corts' ||
          el.district === 'Sarria-Sant-Gervasi'
      )
      const centerL = allDistricts.filter((el) => el.district === 'Gracia')
      const centerR = allDistricts.filter((el) => el.district === 'Horta-Guinardo')
      const right = allDistricts.filter(
        (el) =>
          el.district === 'Nou-Barris' ||
          el.district === 'Sant-Andreu' ||
          el.district === 'Sant-Marti'
      )
      setLeftColumnDistricts(left)
      setCenterLColumnDistricts(centerL)
      setCenterRColumnDistricts(centerR)

      setRightColumnDistricts(right)
    }
  }, [])

  const renderList = (district, neighborhoods) => (
    <StyledList key={district}>
      <Lists>
        <li
          className={state.districtID === district ? 'district lit-district' : 'district'}
          onMouseOver={() =>
            dispatch({
              type: MAP_ACTIONS.LIT_DISTRICT,
              payload: district,
            })
          }
        >
          {district === 'L-Eixample' ? district.replace('-', '´') : district.replace('-', ' ')}
        </li>
        <ul>
          {neighborhoods
            .filter((n) => Number.isFinite(n.nr))
            .map(({ nr, id, name }) => (
              <li
                key={id}
                className={
                  id === state.neighborhoodID
                    ? 'hidden md:block neighborhood lit-neighborhood'
                    : 'hidden md:block neighborhood'
                }
                onMouseOver={() => dispatch({ type: MAP_ACTIONS.LIT_NEIGHBORHOOD, payload: id })}
              >
                {`${nr}. ${name}`}
              </li>
            ))}
        </ul>
      </Lists>
    </StyledList>
  )

  return (
    <Container>
      <GridItem>
        {leftColumnDistricts.map(({ district, neighborhoods }) =>
          renderList(district, neighborhoods)
        )}
      </GridItem>
      <GridItem>
        {centerLColumnDistricts.map(({ district, neighborhoods }) =>
          renderList(district, neighborhoods)
        )}
      </GridItem>
      <GridItem>
        {centerRColumnDistricts.map(({ district, neighborhoods }) =>
          renderList(district, neighborhoods)
        )}
      </GridItem>
      <GridItem>
        {rightColumnDistricts.map(({ district, neighborhoods }) =>
          renderList(district, neighborhoods)
        )}
      </GridItem>
    </Container>
  )
}

export default DistrictsList

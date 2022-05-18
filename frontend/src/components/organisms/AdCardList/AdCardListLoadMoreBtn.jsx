import React, { useState } from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import Button from '../../atoms'
import AdCardItem from './AdCardItem'
import { device } from '../../../theme'

const ListScroll = styled.div`
  display: grid;
  grid-gap: 1.5rem;

  @media ${device.Tablet} {
    grid-template-columns: repeat(2, 1fr);
  }

  @media ${device.Laptop} {
    grid-template-columns: repeat(3, 1fr);
  }
`

function AdCardListLoadMore({ ads, setLocalizedAdId }) {
  const [currentPage, setCurrentPage] = useState(1)

  const itemsPerPage = 9

  const adsToShow = [...ads].slice(0, currentPage * itemsPerPage)

  const showMoreItems = () => {
    setCurrentPage((prevValue) => prevValue + 1)
  }

  return (
    <div>
      <ListScroll>
        {ads &&
          adsToShow.map((ad, index) => (
            // eslint-disable-next-line react/no-array-index-key
            <AdCardItem key={index} ad={ad} openSelectedAdPopup={() => setLocalizedAdId(index)} />
          ))}
      </ListScroll>
      <Button type="button" text="Load more" onClick={showMoreItems} className="mt-5" />
    </div>
  )
}

AdCardListLoadMore.propTypes = {
  ads: PropTypes.object,
  setLocalizedAdId: PropTypes.string,
}
export default styled(AdCardListLoadMore)``

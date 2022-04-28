import React, { useState } from 'react'
import PropTypes from 'prop-types'
import AdCardListStyled from './AdCardItem.styles'
import Button from '../../atoms/Button/Button'
import AdCardItem from './AdCardItem'

function AdCardListLoadMore({ ads, setLocalizedAdId }) {
  const [currentPage, setCurrentPage] = useState(1)

  const itemsPerPage = 9

  const adsToShow = [...ads].slice(0, currentPage * itemsPerPage)

  const showMoreItems = () => {
    setCurrentPage((prevValue) => prevValue + 1)
  }

  return (
    <AdCardListStyled>
      <div className="list-scroll">
        {ads &&
          adsToShow.map((ad) => (
            <AdCardItem key={ad.id} ad={ad} openSelectedAdPopup={() => setLocalizedAdId(ad.id)} />
          ))}
      </div>
      <Button type="button" text="Load more" onClick={showMoreItems} className="mt-5" />
    </AdCardListStyled>
  )
}

AdCardListLoadMore.propTypes = {
  ads: PropTypes.arrayOf(PropTypes.object),
  setLocalizedAdId: PropTypes.func,
}

export default AdCardListLoadMore

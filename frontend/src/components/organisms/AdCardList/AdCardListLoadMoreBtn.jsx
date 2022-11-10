import React, { useState } from 'react'
import PropTypes from 'prop-types'
import { Button } from '../../atoms'
import AdCardItem from './AdCardItem'
import { Grid } from '../../../theme'

function AdCardListLoadMore({ ads, setLocalizedAdId }) {
  const [currentPage, setCurrentPage] = useState(1)

  const itemsPerPage = 9

  const adsToShow = [...ads].slice(0, currentPage * itemsPerPage)

  const showMoreItems = () => {
    setCurrentPage((prevValue) => prevValue + 1)
  }

  return (
    <div>
      <Grid gridGap="1.5rem">
        {ads &&
          adsToShow.map((ad, index) => (
            // eslint-disable-next-line react/no-array-index-key
            <AdCardItem key={index} ad={ad} openSelectedAdPopup={() => setLocalizedAdId(index)} />
          ))}
      </Grid>
      <Button type="button" text="Load more" onClick={showMoreItems} className="mt-5" />
    </div>
  )
}

AdCardListLoadMore.propTypes = {
  ads: PropTypes.object,
  setLocalizedAdId: PropTypes.string,
}
export default AdCardListLoadMore

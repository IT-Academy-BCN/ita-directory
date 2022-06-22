import React, { useState, useEffect } from 'react'
import axios from 'axios'
import AdCardItem from './AdCardItem'
import Pagination from '../Pagination'
import { Grid } from '../../../theme'

function AdCardListPagination() {
  const [ads, setAds] = useState([])
  const [currentPage, setCurrentPage] = useState(1)

  const itemsPerPage = 9

  const adsToShow = [...ads].slice(0, currentPage * itemsPerPage)

  const getAds = async () => {
    try {
      const response = await axios.get(`${import.meta.env.REACT_APP_API_URL}/ads/v1/ads`)
      const newAds = response.data.data
      setAds(newAds)
    } catch (e) {
      //  console.error(e)
    }
  }

  useEffect(() => {
    getAds()
  }, [])

  const paginate = (pageNumber) => setCurrentPage(pageNumber)

  return (
    <div>
      <Grid gridGap="1.5rem">
        {ads && adsToShow.map((ad) => <AdCardItem key={ad.id} ad={ad} />)}
      </Grid>
      <Pagination
        itemsPerPage={itemsPerPage}
        totalItems={ads.length}
        currentPage={currentPage}
        paginate={paginate}
      />
    </div>
  )
}
export default AdCardListPagination

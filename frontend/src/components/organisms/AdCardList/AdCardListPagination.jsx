import React, { useState, useEffect } from 'react'
import axios from 'axios'
import styled from 'styled-components'
import AdCardItem from './AdCardItem'
import Pagination from '../Pagination/Pagination'
import { device } from '../../../theme'

const AdCardListStyled = styled.div`
  .list-scroll {
    display: grid;
    grid-gap: 1.5rem;

    @media ${device.Tablet} {
      grid-template-columns: repeat(2, 1fr);
    }

    @media ${device.Laptop} {
      grid-template-columns: repeat(3, 1fr);
    }
  }
`

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
    <AdCardListStyled>
      <div className="list-scroll">
        {ads && adsToShow.map((ad) => <AdCardItem key={ad.id} ad={ad} />)}
      </div>
      <Pagination
        itemsPerPage={itemsPerPage}
        totalItems={ads.length}
        currentPage={currentPage}
        paginate={paginate}
      />
    </AdCardListStyled>
  )
}
export default styled(AdCardListPagination)``

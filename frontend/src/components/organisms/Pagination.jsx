import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'

const PaginationStyled = styled.ul`
  display: flex;
  justify-content: center;
  gap: 0.5rem;
  margin-bottom: 20px;

  .page-item {
    border: 1px solid black;
    border-radius: 3px;
    padding: 2px 4px;
    cursor: pointer;
  }

  .page-item.active {
    background: #e2dede;
  }
`

function Pagination({ itemsPerPage, totalItems, paginate, currentPage }) {
  const pageNumbers = []

  for (let i = 1; i <= Math.ceil(totalItems / itemsPerPage); i += 1) {
    pageNumbers.push(i)
  }

  return (
    <nav>
      <PaginationStyled>
        {pageNumbers.length > 1
          ? pageNumbers.map((number) => (
              <li className={`page-item ${currentPage === number ? 'active' : null}`} key={number}>
                <a onClick={() => paginate(number)} href="!#">
                  {number}
                </a>
              </li>
            ))
          : null}
      </PaginationStyled>
    </nav>
  )
}

Pagination.propTypes = {
  itemsPerPage: PropTypes.number.isRequired,
  totalItems: PropTypes.number.isRequired,
  paginate: PropTypes.func.isRequired,
  currentPage: PropTypes.number.isRequired,
}

export default Pagination

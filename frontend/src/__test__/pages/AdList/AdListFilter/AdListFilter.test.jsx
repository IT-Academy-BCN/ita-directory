import React from 'react'
import axios from 'axios'
import { describe, it, expect } from 'vitest'
import { render, screen } from '../../../test-utils'
import AdListFilter from '../../../../pages/AdList/AdListFilter/AdListFilter'

axios.defaults.baseURL = import.meta.env.VITE_API_URL

describe('AdListFilter', () => {
  it('should render the AdListFilter', () => {
    render(<AdListFilter />)

    const adListStyled = screen.getByText('Filtros')
    expect(adListStyled).toBeInTheDocument()
  })
})

import React from 'react'
import axios from 'axios'
import { describe, it, expect } from 'vitest'
import { render, screen } from '../../../test-utils'
import AdCard from '../../../../pages/AdList/AdCard/AdCard'

axios.defaults.baseURL = import.meta.env.VITE_API_URL

describe('AdListCard', () => {
  it('should render the AdCard', () => {
    render(<AdCard />)

    const contactButtonText = screen.queryByText('Contactar')
    expect(contactButtonText).toBeInTheDocument()
  })
})

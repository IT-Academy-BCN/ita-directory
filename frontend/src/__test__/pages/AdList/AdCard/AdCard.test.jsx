import React from 'react'
import axios from 'axios'
import { Provider } from 'react-redux'
import { render, screen } from '@testing-library/react'
import { BrowserRouter } from 'react-router-dom'
import { describe, it, expect } from 'vitest'
import AdCard from '../../../../pages/AdList/AdCard/AdCard'
import store from '../../../../store/store'

axios.defaults.baseURL = import.meta.env.VITE_API_URL

describe('AdListCard', () => {
  it('should render the AdCard', () => {
    render(
      <BrowserRouter>
        <Provider store={store}>
          <AdCard />
        </Provider>
      </BrowserRouter>
    )

    const contactButtonText = screen.queryByText('Contactar')
    expect(contactButtonText).toBeInTheDocument()
  })
})

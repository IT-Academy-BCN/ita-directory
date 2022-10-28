import React from 'react'
import axios from 'axios'
import { Provider } from 'react-redux'
import { render, screen } from '@testing-library/react'
import { BrowserRouter } from 'react-router-dom'
import { describe, it, expect } from 'vitest'
import AdListFilter from '../../../../pages/AdList/AdListFilter/AdListFilter'
import store from '../../../../store/store'

axios.defaults.baseURL = import.meta.env.VITE_API_URL

function TestComponent() {
  return (
    <BrowserRouter>
      <Provider store={store}>
        <AdListFilter />
      </Provider>
    </BrowserRouter>
  )
}

describe('AdListFilter', () => {
  it('should render the AdListFilter', () => {
    render(<TestComponent />)

    const adListStyled = screen.getByText('Filtros')
    expect(adListStyled).toBeInTheDocument()
  })
})

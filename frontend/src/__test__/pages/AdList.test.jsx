import React from 'react'
import axios from 'axios'
import { Provider } from 'react-redux'
import { render, screen } from '@testing-library/react'
import { BrowserRouter } from 'react-router-dom'
import { describe, it, expect } from 'vitest'
import AdList from '../../pages/AdList/AdList'
import store from '../../store/store'

axios.defaults.baseURL = import.meta.env.VITE_API_URL

describe('AdList', () => {
  beforeEach(() => {
    window.localStorage.clear()
  })

  it('should render the AdList', () => {
    window.localStorage.setItem('token', 'true')
    window.localStorage.setItem('refreshToken', 'false')
    render(
      <BrowserRouter>
        <Provider store={store}>
          <AdList />
        </Provider>
      </BrowserRouter>
    )

    const adListStyled = screen.getByTestId('adListStyled')
    expect(adListStyled).toBeInTheDocument()
  })
})

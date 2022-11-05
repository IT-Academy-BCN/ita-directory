import React from 'react'
import axios from 'axios'
import { describe, it, expect } from 'vitest'
import { render, screen } from '../../test-utils'
import AdList from '../../../pages/AdList/AdList'

axios.defaults.baseURL = import.meta.env.VITE_API_URL

describe('AdList', () => {
  beforeEach(() => {
    window.localStorage.clear()
  })

  it('should render the AdList', () => {
    window.localStorage.setItem('token', 'true')
    window.localStorage.setItem('refreshToken', 'false')
    render(<AdList />)

    const adListStyled = screen.getByTestId('adListStyled')
    expect(adListStyled).toBeInTheDocument()
  })
})

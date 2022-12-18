import React from 'react'
import '@testing-library/jest-dom'
import { Provider } from 'react-redux'
import { render, screen } from '@testing-library/react'
import { describe, it, expect } from 'vitest'
import { Contributors } from '../../components/organisms'
import store from '../../store/store'

describe('Contributors', () => {
  it('should render Contributors', async () => {
    render(
      <Provider store={store}>
        <Contributors />
      </Provider>
    )
    const img = await screen.findByRole('avatar')
    expect(img).toBeInTheDocument()
  })
})

// @ts-nocheck
import '@testing-library/jest-dom'
import { Provider } from 'react-redux'
import { render, screen } from '@testing-library/react'
import { describe, it, expect } from 'vitest'
import ColaboradoresBanner from '../../assets/logos/Colaboradores-Banner.jpg'
import BarcelonaBanner from '../../assets/logos/barcelona-banner.jpg'

import Banner from '../../components/molecules/Banner'
import store from '../../store/store'

describe('Banner', () => {
  it('should have a Barcelona Banner', async () => {
    render(<Banner />)
    const srcImg = BarcelonaBanner
    const img = screen.getByAltText('image banner')
    expect(img).toBeInTheDocument().toHaveAttribute('src', srcImg)
    expect(await screen.findByTitle('directory')).toBeInTheDocument()
  })
  it('should have a Contributions Banner', () => {
    render(
      <Provider store={store}>
        <Banner students />
      </Provider>
    )
    const srcImg = ColaboradoresBanner
    const img = screen.getByAltText('image banner')
    expect(img).toBeInTheDocument().toHaveAttribute('src', srcImg)
  })
  it('should render a text', async () => {
    render(
      <Provider store={store}>
        <Banner students />
      </Provider>
    )

    const text = await screen.findByTitle('contributors')
    expect(text).toBeInTheDocument()
    expect(await screen.findByTitle('description')).toBeInTheDocument()
    expect(await screen.findByTitle('profiles')).toBeInTheDocument()
    expect(await screen.findByTitle('footer')).toBeInTheDocument()
  })
  it('should render Contributors', async () => {
    render(
      <Provider store={store}>
        <Banner students />
      </Provider>
    )
    const contributors = screen.getByTestId('loading')
    expect(contributors).toBeInTheDocument()
  })
})

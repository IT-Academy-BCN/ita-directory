import React from 'react'
// eslint-disable-next-line import/no-extraneous-dependencies
import { render, screen } from '@testing-library/react'
import { BrowserRouter } from 'react-router-dom'
import * as ReactRedux from 'react-redux'
import store from '../store/store'

const { Provider } = ReactRedux

function StoreProvider({ children }) {
  return (
    <Provider store={store}>
      <BrowserRouter>{children}</BrowserRouter>
    </Provider>
  )
}

const customRender = (ui, options) => render(StoreProvider)

// eslint-disable-next-line import/no-extraneous-dependencies
export * from '@testing-library/react'

export { customRender as render }

import React from 'react'
// eslint-disable-next-line import/no-extraneous-dependencies
import { render } from '@testing-library/react'
import { BrowserRouter } from 'react-router-dom'
import * as ReactRedux from 'react-redux'
import PropTypes from 'prop-types'
import store from '../store/store'

const { Provider } = ReactRedux

// eslint-disable-next-line react/prop-types
function StoreProvider({ children }) {
  return (
    <Provider store={store}>
      <BrowserRouter>{children}</BrowserRouter>
    </Provider>
  )
}

const customRender = (ui, options) => render(ui, { wrapper: StoreProvider })

// eslint-disable-next-line import/no-extraneous-dependencies
export * from '@testing-library/react'

export { customRender as render }

StoreProvider.prototype = {
  children: PropTypes.node.isRequired,
}

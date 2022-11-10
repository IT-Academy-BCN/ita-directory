import React from 'react'
// eslint-disable-next-line import/no-extraneous-dependencies
import { render } from '@testing-library/react'
import { BrowserRouter } from 'react-router-dom'
import { HelmetProvider } from 'react-helmet-async'
import * as ReactRedux from 'react-redux'
import PropTypes from 'prop-types'
import store from '../store/store'

const { Provider } = ReactRedux

function StoreProvider({ children }) {
  return (
    <Provider store={store}>
      <BrowserRouter>
        <HelmetProvider>{children}</HelmetProvider>
      </BrowserRouter>
    </Provider>
  )
}

const customRender = (ui) => render(ui, { wrapper: StoreProvider })

// eslint-disable-next-line import/no-extraneous-dependencies
export * from '@testing-library/react'

export { customRender as render }

StoreProvider.propTypes = {
  children: PropTypes.node.isRequired,
}

import React from 'react'
import ReactDOM from 'react-dom'
import * as ReactRouterDOM from 'react-router-dom'
import * as ReactRedux from 'react-redux'
import axios from 'axios'
import './modern-normalize.css'
import App from './App'
import store from './store/store'
import GlobalStyle from './theme/globalStyles'

const { BrowserRouter } = ReactRouterDOM
const { Provider } = ReactRedux

axios.defaults.baseURL = import.meta.env.VITE_API_URL

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <BrowserRouter>
        <GlobalStyle />
        <App />
      </BrowserRouter>
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
)

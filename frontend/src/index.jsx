import React from 'react'
import ReactDOM from 'react-dom'
import axios from 'axios'
import { Provider } from 'react-redux'
import { BrowserRouter as Router } from 'react-router-dom'
import GlobalStyle from './theme/globalStyles'

import store from './store/store'
import './modern-normalize.css'
import App from './App'

axios.defaults.baseURL = import.meta.env.VITE_API_URL

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <Router>
        <GlobalStyle />
        <App />
      </Router>
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
)

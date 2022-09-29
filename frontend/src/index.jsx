import React from 'react'
import ReactDOM from 'react-dom'
import { BrowserRouter } from 'react-router-dom'
import { Provider } from 'react-redux'
import axios from 'axios'
import App from './App'
import store from './store/store'
import GlobalStyle from './theme/globalStyles'

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

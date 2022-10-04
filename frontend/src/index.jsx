import React from 'react'
import ReactDOM from 'react-dom'
import axios from 'axios'
import './modern-normalize.css'
import App from './App'

axios.defaults.baseURL = import.meta.env.VITE_API_URL

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
)

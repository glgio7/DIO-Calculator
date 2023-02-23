import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import GlobalCSS from './globalcss'

ReactDOM.createRoot(document.getElementById('root')).render(
  <>
  <GlobalCSS/>
    <App />
  </>
)

import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import { App } from './app/app'
import { Providers } from './components/providers'

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <Providers>
      <App />
    </Providers>
  </React.StrictMode>,
)

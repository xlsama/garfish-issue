import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import './index.css'

import Garfish from 'garfish'
import { GarfishEsModule } from '@garfish/es-module'
import { GarfishCssScope } from '@garfish/css-scope'

Garfish.run({
  basename: '/',
  plugins: [
    GarfishCssScope({
      fixBodyGetter: true,
      excludes: ['appName'],
    }),
    GarfishEsModule(),
  ],
})

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
)

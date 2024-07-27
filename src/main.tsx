import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import { Web3ModalProvider } from './utilities/Web3Modal'

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <Web3ModalProvider />
  </React.StrictMode>,
)

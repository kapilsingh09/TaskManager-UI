import { StrictMode ,useState } from 'react'
import { createRoot } from 'react-dom/client'
import './App.css'
import App from './App.jsx'
import AuthProvider from './Context/AuthProvider.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
 
<AuthProvider >

      <App />

</AuthProvider>

  
  </StrictMode>,
)

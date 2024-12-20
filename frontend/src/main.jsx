import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom'
import App from './App.jsx'
import './index.css'
import { UserProvider } from './UserContext.jsx'
import { AuthProvider } from './auth.jsx'



createRoot(document.getElementById('root')).render(
  <StrictMode>
      <BrowserRouter>
        <UserProvider>
          <AuthProvider>
            <App/>
          </AuthProvider>
        </UserProvider>
      </BrowserRouter>
  </StrictMode>,
)

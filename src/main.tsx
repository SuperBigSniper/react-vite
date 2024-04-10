import { StrictMode, Suspense } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter, useRoutes } from 'react-router-dom'
import './global.css'

import routes from '~react-pages'

function App() {
  const element = useRoutes(routes)
  return <Suspense fallback={<p>Loading...</p>}>{element}</Suspense>
}

const app = createRoot(document.getElementById('root')!)

app.render(
  <StrictMode>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </StrictMode>,
)

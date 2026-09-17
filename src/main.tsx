import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { HashRouter } from 'react-router-dom'
import './index.css'
import App from './App.tsx'

// HashRouter (not BrowserRouter): the site is a static SPA that may be
// hosted anywhere (GitHub Pages, Vercel static export, etc.) without a
// server-side rewrite rule, so real paths like /lektion-1/grammatik must
// live after a "#" to survive a hard refresh or a shared link.
createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <HashRouter>
      <App />
    </HashRouter>
  </StrictMode>,
)

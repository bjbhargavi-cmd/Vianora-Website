import { Routes, Route } from 'react-router-dom'
import Logo from './components/ui/Logo.jsx'
import { siteConfig } from './data/siteConfig.js'

// Temporary placeholder so you can confirm the project runs.
// Real pages and routes are added in Phase 2 onwards.
function Placeholder() {
  return (
    <main className="min-h-screen flex flex-col items-center justify-center gap-4 bg-navy px-6 text-center">
      <Logo light />
      <p className="text-white/80 max-w-md">{siteConfig.tagline}</p>
      <p className="rounded-full bg-gold px-4 py-2 text-sm font-semibold text-navy">
        Project setup complete. Website pages come in Phase 2.
      </p>
    </main>
  )
}

export default function App() {
  return (
    <Routes>
      <Route path="*" element={<Placeholder />} />
    </Routes>
  )
}

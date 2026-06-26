import { BrowserRouter, Route, Routes, useLocation } from 'react-router-dom'
import { useEffect } from 'react'
import { Landing } from './Landing'
import { About } from './pages/About'
import { BuiltInMethod } from './pages/BuiltInMethod'
import { ExecutiveAI } from './pages/ExecutiveAI'
import { WorkforceAI } from './pages/WorkforceAI'

function ScrollToTop() {
  const { pathname, hash } = useLocation()
  useEffect(() => {
    if (!hash) window.scrollTo(0, 0)
  }, [pathname, hash])
  return null
}

export default function App() {
  return (
    <BrowserRouter>
      <ScrollToTop />
      <Routes>
        <Route path="/" element={<Landing />} />
        <Route path="/about" element={<About />} />
        <Route path="/built-in-method" element={<BuiltInMethod />} />
        <Route path="/executive-ai-capability" element={<ExecutiveAI />} />
        <Route path="/workforce-ai-adoption" element={<WorkforceAI />} />
      </Routes>
    </BrowserRouter>
  )
}

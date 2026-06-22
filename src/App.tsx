import { BrowserRouter, Route, Routes } from 'react-router-dom'
import { Landing } from './Landing'
import { About } from './pages/About'
import { BuiltInMethod } from './pages/BuiltInMethod'
import { ExecutiveAI } from './pages/ExecutiveAI'
import { WorkforceAI } from './pages/WorkforceAI'

export default function App() {
  return (
    <BrowserRouter>
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

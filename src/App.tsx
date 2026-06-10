import { BrowserRouter, Route, Routes } from 'react-router-dom'
import { Landing } from './Landing'
import { About } from './pages/About'
import { Industries } from './pages/Industries'

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Landing />} />
        <Route path="/about" element={<About />} />
        <Route path="/industries" element={<Industries />} />
      </Routes>
    </BrowserRouter>
  )
}

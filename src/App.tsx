import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import './App.css'

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<div>hi</div>} />
        <Route path="/highlights" element={<div>hello there</div>} />
      </Routes>
    </Router>
  )
}

export default App

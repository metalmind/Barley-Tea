import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import BottomNavbar from './components/BottomNavbar'
import './App.css'

/**
 * Calls the bottom navbar on all pages
 */
function App() {
  return (
    <Router>
      <BottomNavbar />
      
      <Routes>
        <Route path="/" element={<div>Home Page</div>} />
        <Route path="/search" element={<div>Search Page</div>} />
        <Route path="/social" element={<div>Social Page</div>} />
        <Route path="/highlights" element={<div>Highlights Page</div>} />
      </Routes>
    </Router>
  )
}

export default App
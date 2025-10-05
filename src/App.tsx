import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import AuthUI from "./Auth";
import { DailyNote } from "./views/DailyNote"
import "./App.css";
import "./styles/style.css";
import BottomNavbar from './components/BottomNavbar';

/**
 * Calls the bottom navbar on all pages
 */
function App() {

  return (
    <Router>
      <BottomNavbar />
      
      <Routes>
        <Route
          path="/"
          element={<AuthUI />} />
        <Route path="/home" element={<DailyNote />} />
      </Routes>
    </Router>
  );
}

export default App;

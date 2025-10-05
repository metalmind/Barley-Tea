import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import AuthUI from "./Auth";
import { DailyNote } from "./views/DailyNote/DailyNote";
import { NoteList } from './views/WeeklyNotes'
import { AllNotes } from './views/AllNotes'
import "./App.css";
import "./styles/style.css";
import BottomNavbar from "./components/BottomNavbar";

/**
 * Calls the bottom navbar on all pages
 */
function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<AuthUI />} />
        <Route
          path="/"
          element={<AuthUI />} />
        <Route path="/home" element={<><DailyNote /><BottomNavbar /></>} />
        <Route path="/weeklyNotes" element={<><NoteList /><BottomNavbar /></>} />
        <Route path="/allNotes" element={<><AllNotes /><BottomNavbar /></>} />
      </Routes>
    </Router>
  );
}

export default App;

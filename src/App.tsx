import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import AuthUI from "./Auth";
import { DailyNote } from "./views/DailyNote"
//Remove Authenticated Page once sign out button is good
import AuthenticatedPage from "./views/Authenticated"
import "./App.css";
import "./styles/style.css";

function App() {

  return (
    <Router>
      <Routes>
        <Route
          path="/"
          element={<AuthUI />} />
        <Route path="/home" element={<DailyNote />} />
        {/* Remove Sign authenticated portion once sign out button is good (Also remove the Authenticated.tsx) */}
        <Route path="/authenticated" element={<AuthenticatedPage />} />
      </Routes>
    </Router>
  );
}

export default App;
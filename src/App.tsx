import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Authentication from "./Auth";
import "./App.css";
//import "./styles/style.css";

function App() {

  return (
    <Router>
      <Routes>
        <Route
          path="/"
          element={<Authentication />} />
        <Route path="/highlights" element={<div>hello there</div>} />
      </Routes>
    </Router>
  );
}

export default App;
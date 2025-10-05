import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Note } from "./components/Note/Note";
import { useNotes } from "./hooks/useNotes";
import "./App.css";
import "./styles/style.css";

function App() {
  const notes = useNotes();

  return (
    <Router>
      <Routes>
        <Route
          path="/"
          element={notes.map((note) => {
            return <Note content={note.message} type={note.background} />;
          })}
        />
        <Route path="/highlights" element={<div>hello there</div>} />
      </Routes>
    </Router>
  );
}

export default App;

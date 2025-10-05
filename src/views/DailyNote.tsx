import { Note } from "../components/Note/Note";
import type { NoteType } from "../hooks/useNotes.tsx";
import { createClient } from "@supabase/supabase-js";

const supa = createClient(
  import.meta.env.VITE_SUPABASE_URL!,
  import.meta.env.VITE_SUPABASE_PUBLISHABLE_KEY!
);


export const DailyNote = () => {
  const getRandomNote = () => {
    return Math.floor(Math.random() * 4 + 1) as NoteType;
  };

  const signOut = async () => {
    await supa.auth.signOut();
    window.location.href = "/"; // redirect to login page
  };

  //return <Note type={getRandomNote()} isEditable />;
  return (
    <div className="daily-note-page" style={{ textAlign: "center", padding: "20px" }}>
      <button
        onClick={signOut}
        style={{
          backgroundColor: "#333",
          color: "white",
          border: "none",
          borderRadius: "8px",
          padding: "10px 20px",
          cursor: "pointer",
          marginBottom: "20px",
        }}
      >
        Sign Out
      </button>

      <Note type={getRandomNote()} isEditable />
    </div>
  );
};

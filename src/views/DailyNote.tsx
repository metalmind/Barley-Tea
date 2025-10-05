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

    const getPhaseOfDay = () => {
        let hour = new Date().getHours()
        if (0 <= hour && hour < 10)
            return 0;
        else if (10 <= hour && hour <= 17)
            return 1;
        else if (17 < hour && hour <= 23)
            return 2;
        else return -1;
    };

  const signOut = async () => {
    await supa.auth.signOut();
    window.location.href = "/"; // redirect to login page
  };

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

      <Sundial phase={getPhaseOfDay()}/>

      <Note type={getRandomNote()} isEditable />
    </div>
  );
};

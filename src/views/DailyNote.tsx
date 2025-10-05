import { Note } from "../components/Note/Note";
import type { NoteType } from "../hooks/useNotes.tsx";
import SignOutButton from "../components/SignOutButton"

export const DailyNote = () => {
  const getRandomNote = () => {
    return Math.floor(Math.random() * 4 + 1) as NoteType;
  };

  return (
    <div className="daily-note-page" style={{ textAlign: "center", padding: "20px" }}>
      <SignOutButton />
      <Note type={getRandomNote()} isEditable />
    </div>
  );
};

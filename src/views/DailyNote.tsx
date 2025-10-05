import { Note } from "../components/Note/Note";
import type { NoteType } from "../hooks/useNotes.tsx";

export const DailyNote = () => {
  const getRandomNote = () => {
    return Math.floor(Math.random() * 4 + 1) as NoteType;
  };

  return <Note type={getRandomNote()} isEditable />;
};

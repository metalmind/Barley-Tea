import { Note } from "../../components/Note/Note.tsx";
import type { NoteType } from "../../hooks/useNotes.tsx";
import { useTodaysNote } from "../../hooks/useNotes.tsx";

export const DailyNote = () => {
  const getRandomNote = () => {
    return Math.floor(Math.random() * 4 + 1) as NoteType;
  };

  const { note } = useTodaysNote();

  return (
    <div className="container">
      {note ? (
        <Note
          key={note.id}
          id={note.id}
          content={note.message}
          type={note.background}
          isEditable
        />
      ) : (
        <Note key={-1} id={-1} type={getRandomNote()} isEditable />
      )}
    </div>
  );
};

import "./DailyNote.css";
import { Note } from "../../components/Note/Note";
import type { NoteType } from "../../hooks/useNotes";
import { useTodaysNote } from "../../hooks/useNotes";
import type { PhaseType } from "../../components/Sundial/Sundial";
import Sundial from "../../components/Sundial/Sundial";

export const DailyNote = () => {
  const getRandomNote = () => {
    return Math.floor(Math.random() * 4 + 1) as NoteType;
  };

  const { note } = useTodaysNote();

  const getPhaseOfDay = () => {
    let hour = new Date().getHours();
    if (0 <= hour && hour < 10) {
      return 1;
    } else if (10 <= hour && hour <= 17) {
      return 2;
    } else if (17 < hour && hour <= 23) {
      return 3;
    } else {
      return -1;
    }
  };

  return (
    <div className="container">
      <Sundial content={getPhaseOfDay() as PhaseType} />
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

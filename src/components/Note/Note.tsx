import { useState } from "react";
import "./Note.css";
import type { NoteType } from "../../hooks/useNotes.tsx";
import note1 from "@/assets/note1.png";
import note2 from "@/assets/note2.png";
import note3 from "@/assets/note3.png";
import note4 from "@/assets/note4.png";

interface NoteProps {
  content?: string;
  type: NoteType;
  isEditable?: boolean;
}

export const Note = ({ content = "", type, isEditable = false }: NoteProps) => {
  const [noteType, setNoteType] = useState<NoteType>(type);

  const notes = {
    1: note1,
    2: note2,
    3: note3,
    4: note4,
  };

  const getNextNoteType = (
    currentType: NoteType,
    direction: "left" | "right"
  ) => {
    if (direction === "left") {
      return currentType > 1 ? currentType - 1 : currentType;
    }
    return currentType < Object.keys(notes).length
      ? currentType + 1
      : currentType;
  };

  const changeNoteType = (direction: "left" | "right") =>
    setNoteType(getNextNoteType(noteType, direction) as NoteType);

  const noteText = isEditable ? (
    <textarea
      id="noteInput"
      className={`note${noteType}`}
      placeholder="What made you happy today?"
    />
  ) : (
    <p className={`noteText note${noteType}`}>{content}</p>
  );

  return (
    <div className="container">
      {isEditable && (
        <button
          className="changeTypeButton"
          onClick={() => changeNoteType("left")}
          disabled={noteType === 1}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="16"
            height="16"
            fill="currentColor"
            className="bi bi-chevron-left"
            viewBox="0 0 16 16"
          >
            <path
              fill-rule="evenodd"
              d="M11.354 1.646a.5.5 0 0 1 0 .708L5.707 8l5.647 5.646a.5.5 0 0 1-.708.708l-6-6a.5.5 0 0 1 0-.708l6-6a.5.5 0 0 1 .708 0"
            />
          </svg>
        </button>
      )}
      <div className={`noteContainer`}>
        <img src={notes[noteType]} alt="sticky note" />
        {noteText}
      </div>
      {isEditable && (
        <button
          className="changeTypeButton"
          onClick={() => changeNoteType("right")}
          disabled={noteType === 4}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="16"
            height="16"
            fill="currentColor"
            className="bi bi-chevron-right"
            viewBox="0 0 16 16"
          >
            <path
              fill-rule="evenodd"
              d="M4.646 1.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1 0 .708l-6 6a.5.5 0 0 1-.708-.708L10.293 8 4.646 2.354a.5.5 0 0 1 0-.708"
            />
          </svg>
        </button>
      )}
    </div>
  );
};

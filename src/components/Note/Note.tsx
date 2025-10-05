import { useState } from "react";
import "./Note.css";
import type { NoteType } from "../../hooks/useNotes.tsx";
import { useUpsertNote } from "../../hooks/useNotes.tsx";
import note1 from "@/assets/note1.png";
import note2 from "@/assets/note2.png";
import note3 from "@/assets/note3.png";
import note4 from "@/assets/note4.png";

interface NoteProps {
  id: number;
  content?: string;
  type: NoteType;
  isEditable?: boolean;
}

export const Note = ({
  id,
  content = "",
  type,
  isEditable = false,
}: NoteProps) => {
  const [noteType, setNoteType] = useState<NoteType>(type);
  const [message, setMessage] = useState<string>(content);
  const [editing, setEditing] = useState<boolean>(isEditable);

  const upsertNote = useUpsertNote();

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

  const handleSave = async () => {
    try {
      await upsertNote(id, message, noteType);
      setEditing(false);
    } catch (error) {
      console.error(error);
    }
  };

  const noteText = editing ? (
    <textarea
      id="noteInput"
      className={`note${noteType}`}
      placeholder="What made you happy today?"
      value={message}
      onChange={(e) => setMessage(e.target.value)}
    />
  ) : (
    <p className={`noteText note${noteType}`}>{message}</p>
  );

  return (
    <div className="editableNoteContainer">
      {editing && (
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
              fillRule="evenodd"
              d="M11.354 1.646a.5.5 0 0 1 0 .708L5.707 8l5.647 5.646a.5.5 0 0 1-.708.708l-6-6a.5.5 0 0 1 0-.708l6-6a.5.5 0 0 1 .708 0"
            />
          </svg>
        </button>
      )}
      <div className={`noteContainer`}>
        <img src={notes[noteType]} alt="sticky note" />
        {noteText}
        {!editing && (
          <button className="editButton" onClick={() => setEditing(true)}>
            <svg
              width="24px"
              height="24px"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <g>
                <path fill="none" d="M0 0h24v24H0z" />
                <path d="M15.728 9.686l-1.414-1.414L5 17.586V19h1.414l9.314-9.314zm1.414-1.414l1.414-1.414-1.414-1.414-1.414 1.414 1.414 1.414zM7.242 21H3v-4.243L16.435 3.322a1 1 0 0 1 1.414 0l2.829 2.829a1 1 0 0 1 0 1.414L7.243 21z" />
              </g>
            </svg>
          </button>
        )}
        {editing && (
          <button className="saveButton" onClick={handleSave}>
            Save
          </button>
        )}
      </div>
      {editing && (
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
              fillRule="evenodd"
              d="M4.646 1.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1 0 .708l-6 6a.5.5 0 0 1-.708-.708L10.293 8 4.646 2.354a.5.5 0 0 1 0-.708"
            />
          </svg>
        </button>
      )}
    </div>
  );
};

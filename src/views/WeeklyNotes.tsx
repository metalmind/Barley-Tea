import { Note } from "../components/Note/Note";
import { useNotes } from "../hooks/useNotes";

export const NoteList = () => {
  const { notes, loading } = useNotes();

  if (loading) return <p>Loading notes...</p>;

  return (
    <>
      {notes.length === 0 ? (
        <p>No notes yet!</p>
      ) : (
        notes.map((note) => (
          <Note 
            id={note.id}
            key={note.id}
            content={note.message}
            type={note.background}
          />
        ))
      )}
    </>
  );
};
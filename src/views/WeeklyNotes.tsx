import { Note } from "../components/Note/Note";
import { useNotes } from "../hooks/useNotes";
import "./WeeklyView.css";

export const NoteList = () => {
    const { notes, loading } = useNotes();

    if (loading) return <p>Loading notes...</p>;

    return (
        // <div id="page">
        //   {notes.length === 0 ? (
        //     <p>No notes yet!</p>
        //   ) : (
        //     notes.map((note) => (
        //       <Note 
        //         id={note.id}
        //         key={note.id}
        //         content={note.message}
        //         type={note.background}
        //       />
        //     ))
        //   )}
        // </div>

        <div id="weeklyViewPage">
            {notes.length === 0 ? (
                <p>No notes yet!</p>
            ) : (
                notes.map((note) => (
                    <Note
                        id={note.id}
                        key={note.id}
                        content={note.message + note.created_at}
                        type={note.background}
                    />
                ))
            )}
        </div>

    );
};
import { DateComponent } from "../components/DateComponent/DateComponent";
import { Note } from "../components/Note/Note";
import { useNotes } from "../hooks/useNotes";
import "./WeeklyView.css";

export const AllNotes = () => {
    const { notes, loading } = useNotes("all");

    if (loading) return <p>Loading notes...</p>;

    return (
        <div id="weeklyViewPage">
            {notes.length === 0 ? (
                <p>No notes yet!</p>
            ) : (
                notes.map((note) => (
                    <div className="noteDateContainer">
                        <DateComponent key={note.id} date={note.created_at} />
                        <Note id={note.id} content={note.message} type={note.background} />
                    </div>
                ))
            )}
        </div>

    );
};
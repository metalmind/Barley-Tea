import { Note } from "../components/Note/Note";
import { useNotes } from "../hooks/useNotes";
import "./WeeklyView.css";

export const NoteList = () => {
    const { notes, loading } = useNotes("week");

    const UTCPrettify = (utc: string) =>
    {
        let date = new Date(utc);
        let dayOfWeek = numToDayOfWeek(date.getDay())
        let day = date.getDate()
        let month = numToMonth(date.getMonth())
        let year = date.getFullYear()

        return dayOfWeek + ", " + month + " " + day + " " + year

        
    }

    function numToDayOfWeek(dayOfWeekNum: number):string
    {
        switch (dayOfWeekNum)
        {
            case 0: return "Sunday"
            case 1: return "Monday"
            case 2: return "Tuesday"
            case 3: return "Wednesday"
            case 4: return "Thursday"
            case 5: return "Friday"
            case 6: return "Saturday"
            default: return "Error"
        }
    }

    function numToMonth(MonthNum: number):string
    {
        switch (MonthNum)
        {
            case 0: return "January"
            case 1: return "February"
            case 2: return "March"
            case 3: return "April"
            case 4: return "May"
            case 5: return "June"
            case 6: return "July"
            case 7: return "August"
            case 8: return "September"
            case 9: return "October"
            case 10: return "November"
            case 11: return "December"
            default: return "Error"
        }
    }

    if (loading) return <p>Loading notes...</p>;

    return (
        <div id="weeklyViewPage">
            {notes.length === 0 ? (
                <p>No notes yet!</p>
            ) : (
                notes.map((note) => (
                    <Note
                        id={note.id}
                        key={note.id}
                        content={note.message + "\n" + UTCPrettify(note.created_at)}
                        type={note.background}
                    />
                ))
            )}
        </div>

    );
};
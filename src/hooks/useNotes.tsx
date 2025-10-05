import { useEffect, useState } from "react";
import { createClient } from "@supabase/supabase-js";

const supabase = createClient(
  import.meta.env.VITE_SUPABASE_URL,
  import.meta.env.VITE_SUPABASE_PUBLISHABLE_KEY
);

export type NoteType = 1 | 2 | 3 | 4;

interface Note {
  id: number;
  created_at: string;
  message: string;
  background: NoteType;
  author: number;
}

export const useNotes = () => {
  const [notes, setNotes] = useState<Note[]>([]);

  useEffect(() => {
    getNotes();
  }, []);

  async function getNotes() {
    const { data } = await supabase.from("notes").select();
    setNotes(data ?? []);
  }

  return notes;
};

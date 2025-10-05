import { useEffect, useState } from "react";
import { createClient } from "@supabase/supabase-js";

const supabase = createClient(
  import.meta.env.VITE_SUPABASE_URL!,
  import.meta.env.VITE_SUPABASE_PUBLISHABLE_KEY!
);

export type NoteType = 1 | 2 | 3 | 4;

interface Note {
  id: number;
  created_at: string;
  message: string;
  background: NoteType;
  author: string;
}

export const useNotes = () => {
  const [notes, setNotes] = useState<Note[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    getNotes();
  }, []);

  async function getNotes() {
    setLoading(true);

    // Get the current authenticated user
    const {
      data: { user },
      error: userError,
    } = await supabase.auth.getUser();

    if (userError) {
      console.error("Error fetching user:", userError);
      setLoading(false);
      return;
    }

    // Fetch notes for this user, ordered by newest first
    const { data, error } = await supabase
    .from("notes")
    .select("*")
    .eq("author", user?.id)
    .order("created_at", { ascending: false }) // newest first
    .limit(7);

    const notes = data ? data.reverse() : [];

    if (error) {
      console.error("Error fetching notes:", error);
    } else {
      setNotes(notes ?? []);
    }

    setLoading(false);
  }

  return { notes, loading, refresh: getNotes };
};
import { useEffect, useState } from "react";
import { createClient } from "@supabase/supabase-js";
import { useCurrentUser } from "./useUsers";
import { getLocalDateStartEndTime } from "./helpers";

const supabase = createClient(
  import.meta.env.VITE_SUPABASE_URL!,
  import.meta.env.VITE_SUPABASE_PUBLISHABLE_KEY!
);

export type NoteType = 1 | 2 | 3 | 4;

export interface Note {
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

export const useTodaysNote = () => {
  const [note, setNote] = useState<Note>();
  const currentUser = useCurrentUser();

  useEffect(() => {
    if (currentUser) {
      getNote();
    }
  }, [currentUser]);

  async function getNote() {
    const { start, end } = getLocalDateStartEndTime();
    const { data } = await supabase
      .from("notes")
      .select()
      .eq("author", currentUser?.id)
      .gte("created_at", start)
      .lt("created_at", end);

    if (data) {
      setNote(data[0]);
    }
  }

  return {
    note,
    getNote,
  };
};

export const useUpsertNote = () => {
  const currentUser = useCurrentUser();

  async function upsertNote(id: number, message: string, background: NoteType) {
    if (!currentUser) {
      throw new Error("user must be be logged in");
    }
    const { data, error } = await supabase.from("notes").upsert({
      id: id === -1 ? undefined : id,
      message,
      background,
      author: currentUser?.id,
      created_at: new Date().toISOString(),
    });

    if (error) {
      throw error;
    }

    return data;
  }

  return upsertNote;
};

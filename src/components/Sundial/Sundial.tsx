import { ButtonHTMLAttributes, useState } from "react";
import "./Note.css";
import type { NoteType } from "../../hooks/useNotes.tsx";
import note1 from "@/assets/note1.png";
import note2 from "@/assets/note2.png";
import note3 from "@/assets/note3.png";
import note4 from "@/assets/note4.png";
import phase1 from "@/assets/morning.png";
import phase2 from "@/assets/midday.png";
import phase3 from "@/assets/vening.png";

export type PhaseType = 1 | 2 | 3 | 4;

interface PhaseProps {
  content: PhaseType;
}

function Sundial ({ content = 1  }) {

    const phases = {
        1: note1,
        2: note2,
        3: note3
    };

    return (
        <img src = { phases[content] } alt = "time of day" />
    );
};
